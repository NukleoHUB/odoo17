# -*- coding: utf-8 -*-

from odoo import api, fields, models, _
from odoo.exceptions import ValidationError


class LanguageClassReport(models.TransientModel):
    _name = "language.class.report"
    _description = "Language Class Report"

    start_date = fields.Date("Start Date")
    end_date = fields.Date("End Date ")
    attendance_list_ids = fields.One2many(
        'language.class.report', "class_report")
    language_class_ids = fields.Many2many('language.class', string="Classes")
    lesson_type = fields.Selection([
        ('started', 'Started'),
        ('completed', 'Completed'),
        ('both', 'Both Started and Completed')], 'Lesson Type', default='started')
    class_report = fields.Char('Class Report')
    lesson_name = fields.Char("Lesson Name")
    start_time = fields.Datetime("Start Date ")
    end_time = fields.Datetime("End Date")
    student_name = fields.Char('Student Name')
    teacher_name = fields.Char('Teacher Name')
    attendance = fields.Char('Attendance ')
    is_attendance = fields.Boolean('Attendance')

    @api.onchange('lesson_type')
    def _onchange_lesson_type(self):
        if self.lesson_type:
            self.language_class_ids = False
            if self.lesson_type == 'started':
                self.language_class_ids = self.env['language.class'].search([('state', '=', 'started')]).ids
            elif self.lesson_type == 'completed':
                self.language_class_ids = self.env['language.class'].search([('state', '=', 'completed')]).ids
            else:
                self.language_class_ids = self.env['language.class'].search([('state', 'in', ['completed', 'started'])]).ids

    @api.constrains('start_date', 'end_date')
    def check_dates(self):
        for rec in self:
            if rec.start_date > rec.end_date:
                raise ValidationError(
                    _('The start date of the time off must be earlier than the end date.'))

    def print_pdf(self):
        if not self.start_date and not self.end_date:
            raise ValidationError(_('Duration required for print!'))
        if not self.language_class_ids:
            raise ValidationError(_('No any classes found!'))
        else:
            attendance_ids = self.env['lesson.student.attendance'].search(
                [('lesson_id.start_time', '>=', self.start_date),
                 ('lesson_id.end_time', '<=', self.end_date),
                 ('lesson_id.language_class_id', 'in', self.language_class_ids.ids)])
        if self.is_attendance and attendance_ids:
            attendance_ids = attendance_ids.filtered(lambda l: l.attendance == 'present')
        if attendance_ids:
            action = {
                'name': _("Attendance Calendar"),
                'view_mode': 'calendar',
                'view_type': 'calendar',
                'res_model': 'lesson.student.attendance',
                'type': 'ir.actions.act_window',
                'context': self._context,
                'domain': [('id', 'in', attendance_ids.ids)],
            }
            return action
        else:
            raise ValidationError(_('No any record found!'))
