from odoo import api, fields, models, _
from odoo.exceptions import UserError
import datetime


class AddLessonWizard(models.TransientModel):
    _name = "add.lesson.wizard"
    _description = 'Add Lesson Wizard'

    language_class_id = fields.Many2one('language.class', 'Class Name')
    student_ids = fields.Many2many('language.student', 'add_lesson_student_rel', 'wizard_id', 'student_id',
                                   string='Students')

    @api.model
    def default_get(self, fields):
        res = super(AddLessonWizard, self).default_get(fields)
        active_id = self.env.context.get('active_id')
        language_class_id = self.env['language.class'].browse(active_id)
        res.update({'language_class_id': language_class_id})
        return res

    def add_lesson(self):
        if self.student_ids:
            if self.language_class_id:
                self.language_class_id.student_ids = self.student_ids.ids
                self.language_class_id.language_lesson_ids.unlink()

                # Class repeats daily
                if self.language_class_id.repeat == 'daily':
                    class_start_date = datetime.datetime.strptime(str(self.language_class_id.start_time),
                                                                  '%Y-%m-%d %H:%M:%S').date()
                    start_date = datetime.date(class_start_date.year, class_start_date.month, class_start_date.day)
                    start_time = datetime.datetime.strptime(str(self.language_class_id.start_time),
                                                            '%Y-%m-%d %H:%M:%S').time()

                    class_end_date = datetime.datetime.strptime(str(self.language_class_id.end_time),
                                                                '%Y-%m-%d %H:%M:%S').date()
                    end_date = datetime.date(class_end_date.year, class_end_date.month, class_end_date.day)
                    end_time = datetime.datetime.strptime(str(self.language_class_id.end_time),
                                                          '%Y-%m-%d %H:%M:%S').time()

                    duration = datetime.timedelta(days=1)
                    while start_date <= end_date:
                        start_datetime = datetime.datetime.combine(start_date, start_time)
                        end_datetime = datetime.datetime.combine(start_date, end_time)
                        self.env['language.lesson'].create({
                            'language_class_id': self.language_class_id and self.language_class_id.id,
                            'name': self.language_class_id.name,
                            'start_time': start_datetime,
                            'end_time': end_datetime,
                            'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                            'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                            'student_ids': self.student_ids.ids,
                            'state': 'draft'
                        })
                        start_date += duration

                # Class repeats weekly
                if self.language_class_id.repeat == 'weekly':
                    class_start_date = datetime.datetime.strptime(str(self.language_class_id.start_time),
                                                                  '%Y-%m-%d %H:%M:%S').date()
                    start_date = datetime.date(class_start_date.year, class_start_date.month, class_start_date.day)
                    start_time = datetime.datetime.strptime(str(self.language_class_id.start_time),
                                                            '%Y-%m-%d %H:%M:%S').time()

                    class_end_date = datetime.datetime.strptime(str(self.language_class_id.end_time),
                                                                '%Y-%m-%d %H:%M:%S').date()
                    end_date = datetime.date(class_end_date.year, class_end_date.month, class_end_date.day)
                    end_time = datetime.datetime.strptime(str(self.language_class_id.end_time),
                                                          '%Y-%m-%d %H:%M:%S').time()

                    duration = datetime.timedelta(days=1)
                    while start_date <= end_date:
                        if start_date.weekday() == 0 and self.language_class_id.monday_0:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 1 and self.language_class_id.tuesday_1:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 2 and self.language_class_id.wednesday_2:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 3 and self.language_class_id.thursday_3:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 4 and self.language_class_id.friday_4:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 5 and self.language_class_id.saturday_5:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })

                        if start_date.weekday() == 6 and self.language_class_id.sunday_6:
                            start_datetime = datetime.datetime.combine(start_date, start_time)
                            end_datetime = datetime.datetime.combine(start_date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })
                        start_date += duration

                # Class repeats monthly
                if self.language_class_id.repeat == 'monthly':
                    if self.language_class_id.monthly_dates_ids:
                        for date_line in self.language_class_id.monthly_dates_ids:
                            start_time = datetime.datetime.strptime(str(self.language_class_id.start_time),
                                                                    '%Y-%m-%d %H:%M:%S').time()
                            end_time = datetime.datetime.strptime(str(self.language_class_id.end_time),
                                                                  '%Y-%m-%d %H:%M:%S').time()
                            start_datetime = datetime.datetime.combine(date_line.date, start_time)
                            end_datetime = datetime.datetime.combine(date_line.date, end_time)
                            self.env['language.lesson'].create({
                                'language_class_id': self.language_class_id and self.language_class_id.id,
                                'name': self.language_class_id.name,
                                'start_time': start_datetime,
                                'end_time': end_datetime,
                                'employee_id': self.language_class_id.employee_id and self.language_class_id.employee_id.id or False,
                                'product_id': self.language_class_id.product_id and self.language_class_id.product_id.id or False,
                                'student_ids': self.student_ids.ids,
                                'state': 'draft'
                            })
                    else:
                        raise UserError(_('Monthly dates are not available in class...!!!'))
        else:
            raise UserError(_('Please select student...!!!'))
