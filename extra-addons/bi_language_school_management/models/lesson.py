# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


class LanguageLesson(models.Model):
    _name = "language.lesson"
    _description = "Language Lesson"
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Char('Lesson Name', tracking=True)
    start_time = fields.Datetime('Start Time', tracking=True)
    end_time = fields.Datetime('End Time', tracking=True)
    employee_id = fields.Many2one('hr.employee', 'Teacher', tracking=True)
    product_id = fields.Many2one('product.product', 'Service', tracking=True)
    student_ids = fields.Many2many('language.student', 'student_lesson_rel', 'student_id', 'lesson_id',
                                   string='Students', tracking=True)
    state = fields.Selection([
        ('draft', 'Draft'),
        ('started', 'Started'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')], 'Status', default='draft', tracking=True)
    student_attendance_ids = fields.One2many(
        'lesson.student.attendance', 'lesson_id', 'Attendance')

    def button_start(self):
        if self.student_ids:
            for student in self.student_ids:
                self.env['lesson.student.attendance'].create({
                    'lesson_id': self.id,
                    'student_id': student and student.id or False,
                    'attendance': 'present',
                })
        self.state = 'started'

    def button_complete(self):
        self.state = 'completed'

    def button_cancel(self):
        self.state = 'cancelled'


class LessonStudentAttendance(models.Model):
    _name = "lesson.student.attendance"
    _description = "Lesson Student Attendance"
    _rec_name = 'combination'

    lesson_id = fields.Many2one(
        'language.lesson', 'Lesson', ondelete='cascade')
    student_id = fields.Many2one('language.student', 'Student Name')
    attendance = fields.Selection([
        ('present', 'Present'),
        ('absent', 'Absent')], 'Attendance', default='present')
    combination = fields.Char(string='Combination', compute='_compute_fields_combination')

    @api.depends('lesson_id', 'student_id')
    def _compute_fields_combination(self):
        for rec in self:
            rec.combination = rec.student_id.first_name + ' - ' + rec.lesson_id.name

    def mark_present(self):
        self.attendance = 'present'

    def mark_absent(self):
        self.attendance = 'absent'
