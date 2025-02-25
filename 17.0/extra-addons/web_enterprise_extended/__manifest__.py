{
    'name': 'Odoo Enterprise Extension',
    'version': '17.0.0.0.1',
    'description': 'Extended Version for Enterprise Addons',
    'summary': 'This module adds some new options for enterprise modules',
    'author': 'test',
    'website': 'test',
    'license': 'LGPL-3',
    'category': 'Other',
    'depends': [
        'base','web_enterprise'
    ],
    'data': [
        'data/ir_config_parameter.xml'
    ],
    'auto_install': True,
    'application': False,
}