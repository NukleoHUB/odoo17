# -*- coding:utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from collections import defaultdict
from datetime import date

from odoo import models, fields


class HrEmployee(models.Model):
    _inherit = 'hr.payslip'

    def _get_data_files_to_update(self):
        # Note: file order should be maintained
        return super()._get_data_files_to_update() + [(
            'l10n_us_hr_payroll', [
                'data/hr_salary_rule_category_data.xml',
                'data/hr_payroll_structure_type_data.xml',
                'data/hr_payroll_structure_data.xml',
                'data/hr_rule_parameters_data.xml',
            ])]

    def _sum_year_to_date_totals(self, to_date):
        from_date = date(to_date.year, 1, 1)
        result = defaultdict(float)
        if to_date is None:
            to_date = fields.Date.today()
        self.env.cr.execute("""
            SELECT sum(total) as amount,
                   code
            FROM (
                SELECT pl.total as total,
                       pl.code as code
                FROM hr_payslip as hp
                JOIN hr_payslip_line as pl ON hp.id = pl.slip_id
                WHERE hp.employee_id = %s
                AND hp.state in ('done', 'paid')
                AND hp.date_from >= %s
                AND hp.date_to <= %s

                UNION ALL

                SELECT hpwd.amount as total,
                       CAST(hpwd.work_entry_type_id as varchar) as code
                FROM hr_payslip as hp
                JOIN hr_payslip_worked_days as hpwd ON hp.id = hpwd.payslip_id
                WHERE hp.employee_id = %s
                AND hp.state in ('done', 'paid')
                AND hp.date_from >= %s
                AND hp.date_to <= %s
            ) as combined
            GROUP BY code
        """, (self.employee_id.id, from_date, to_date, self.employee_id.id, from_date, to_date))

        grouped_payslip_lines = self.env.cr.dictfetchall()
        for payslip_line in grouped_payslip_lines:
            result[payslip_line['code']] = payslip_line['amount']
        return result
