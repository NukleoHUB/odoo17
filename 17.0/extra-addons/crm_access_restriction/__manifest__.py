{
    'name': 'CRM Access Restriction',
    'version': '1.0',
    'author': 'Alexandre-Odoocast',
    'category': 'CRM',
    'summary': 'Restrict access to CRM and messages based on company permissions',
    'depends': ['base', 'crm', 'mail'],
    'data': [
        'security/crm_security.xml',
        'security/ir.model.access.csv',
        'views/crm_menu.xml',
    ],
    'installable': True,
    'application': False,
}
