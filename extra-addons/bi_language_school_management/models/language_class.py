# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError


class LanguageClass(models.Model):
    _name = "language.class"
    _description = "Language Class"
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Char('Class Name', tracking=True)
    start_time = fields.Datetime('Start Time', tracking=True)
    end_time = fields.Datetime('End Time', tracking=True)
    employee_id = fields.Many2one('hr.employee', 'Teacher', tracking=True)
    product_id = fields.Many2one('product.product', 'Service', tracking=True)
    student_ids = fields.Many2many(
        'language.student', 'student_class_rel', 'student_id', 'class_id', string='Students')
    state = fields.Selection([
        ('draft', 'Draft'),
        ('started', 'Started'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')], 'Status', default='draft', tracking=True)

    repeat = fields.Selection([
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly')], 'Repeat', default='daily', tracking=True)
    monday_0 = fields.Boolean('Monday')
    tuesday_1 = fields.Boolean('Tuesday')
    wednesday_2 = fields.Boolean('Wednesday')
    thursday_3 = fields.Boolean('Thursday')
    friday_4 = fields.Boolean('Friday')
    saturday_5 = fields.Boolean('Saturday')
    sunday_6 = fields.Boolean('Sunday')

    monthly_dates_ids = fields.One2many(
        'class.monthly.dates', 'language_class_id', 'Monthly Dates')
    language_lesson_ids = fields.One2many(
        'language.lesson', 'language_class_id', 'Lessons')
    total_lessons = fields.Integer(
        'Total Lessons', compute='cal_total_lessons')
    invoice_created = fields.Boolean('Invoice Created?', default=False)
    invoice_count = fields.Integer(
        'Total Invoice', compute='cal_invoice_count')

    def cal_invoice_count(self):
        for record in self:
            account_move_ids = self.env['account.move'].search(
                [('language_class_id', '=', record.id)])
            record.invoice_count = len(account_move_ids)

    def action_view_invoices(self):
        tree_view_id = self.env.ref('account.view_out_invoice_tree').id
        form_view_id = self.env.ref('account.view_move_form').id
        return {
            'type': 'ir.actions.act_window',
            'name': _('Invoices'),
            'res_model': 'account.move',
            'view_type': 'form',
            'view_mode': 'tree,form',
            'views': [(tree_view_id, 'tree'), (form_view_id, 'form')],
            'context': self.id,
            'domain': [('language_class_id', '=', self.id)]
        }

    @api.depends('language_lesson_ids')
    def cal_total_lessons(self):
        for record in self:
            record.total_lessons = len(record.language_lesson_ids)

    def button_add_lesson(self):
        return {
            'name': _('Add Lessons'),
            'type': 'ir.actions.act_window',
            'target': 'new',
            'view_type': 'form',
            'view_mode': 'form',
            'view_id': self.env.ref('bi_language_school_management.add_lesson_wizard_form_view').id,
            'res_model': 'add.lesson.wizard'
        }

    def button_start(self):
        self.state = 'started'

    def button_complete(self):
        self.state = 'completed'

    def button_cancel(self):
        self.state = 'cancelled'

    def create_invoice(self):
        invoice_id = False
        attendance_ids = self.env['lesson.student.attendance'].search(
            [('lesson_id.language_class_id', '=', self.id), ('attendance', '=', 'present')])
        student_ids = attendance_ids.mapped('student_id')
        lesson_ids = attendance_ids.mapped('lesson_id')
        if not lesson_ids:
            raise ValidationError("You can't create invoice without any lesson started!")
        if any(lesson_ids.filtered(lambda l: l.state in ['draft', 'cancelled'])):
            raise ValidationError('Please make sure any one lesson is started!')
        for student in student_ids:
            if not student.partner_id:
                name = ''
                if student.first_name:
                    name += str(student.first_name)
                if student.last_name:
                    name = name + ' ' + str(student.last_name)

                created_partner_id = self.env['res.partner'].sudo().create({
                    'name': name,
                    'country_id': student.country_id.id,
                    'phone': student.emergency_number,
                    'company_type': 'person',
                    'customer_rank': 1
                })
                student.partner_id = created_partner_id.id

            student_attendance_ids = self.env['lesson.student.attendance'].search(
                [('lesson_id.language_class_id', '=', self.id), ('attendance', '=', 'present'),
                 ('student_id', '=', student.id)])

            if student_attendance_ids:
                if self.product_id.property_account_income_id:
                    income_account = self.product_id.property_account_income_id.id
                elif self.product_id.categ_id.property_account_income_categ_id:
                    income_account = self.product_id.categ_id.property_account_income_categ_id.id
                else:
                    raise UserError(
                        _('Please define income account of product...!'))

                vals = {
                    'move_type': 'out_invoice',
                    'partner_id': student.partner_id.id,
                    'language_class_id': self.id,
                    'invoice_line_ids': [(0, 0, {
                        'product_id': self.product_id and self.product_id.id or False,
                        'name': str(len(student_attendance_ids)) + ' classes of ' + str(self.name),
                        'account_id': income_account,
                        'quantity': len(student_attendance_ids),
                        'price_unit': self.product_id.lst_price
                    })]
                }
                invoice_id = self.env['account.move'].create(vals)
        if invoice_id:
            self.invoice_created = True


class ClassMonthlyDates(models.Model):
    _name = "class.monthly.dates"
    _description = "Class Monthly Dates"

    language_class_id = fields.Many2one(
        'language.class', 'Class Name', ondelete='cascade')
    date = fields.Date('Date')


class LanguageLessonInherit(models.Model):
    _inherit = 'language.lesson'

    language_class_id = fields.Many2one('language.class', 'Class')


class AccountMoveInherit(models.Model):
    _inherit = 'account.move'

    language_class_id = fields.Many2one('language.class', 'Class')
