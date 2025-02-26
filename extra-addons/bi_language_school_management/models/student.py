# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


class LanguageStudent(models.Model):
    _name = "language.student"
    _description = "Language Student"
    _rec_name = 'first_name'

    first_name = fields.Char("First Name")
    last_name = fields.Char("Last Name")
    blood_type = fields.Selection([('a', 'A'), ('b', 'B'), ('ab', 'AB'), ('o', 'O')], string="Blood Type")
    rh = fields.Selection([('-+', '+'), ('--', '-')], string="Rh")
    country_id = fields.Many2one('res.country', 'Nationality (Country)')
    emergency_number = fields.Char('Emergency Contact Number')
    language = fields.Many2one('res.lang', 'Language')
    partner_id = fields.Many2one('res.partner', 'Partner')
    email = fields.Char('Email')
    gender = fields.Selection([('male', 'Male'), ('female', 'Female')], string='Gender')
    street = fields.Char('Street')
    street2 = fields.Char('Street2')
    zip = fields.Char('Zip')
    city = fields.Char('City')
    state_id = fields.Many2one("res.country.state", string='State')
    country_id = fields.Many2one('res.country', string='Country')
    student_lesson_attendance_id = fields.One2many('lesson.student.attendance', 'student_id', string='Student Lesson')
