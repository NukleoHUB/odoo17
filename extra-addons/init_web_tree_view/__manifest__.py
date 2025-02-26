# -*- coding: utf-8 -*-
{
    'name': 'Hierarchy Tree View',
    'version': '17.0.1.0.5',
    'category': 'Extra Tools',
    'summary': 'Hierarchy Tree View',
    'author': 'Init Co. Ltd',
    'support': 'contact@init.vn',
    'website': 'https://init.vn/?utm_source=odoo-store&utm_medium=14&utm_campaign=hierarchy-tree-view',
    'license': 'LGPL-3',
    'price': '29',
    'currency': 'USD',
    'description': """Hierarchy Tree View""",
    'depends': [
        'web',
    ],
    'data': [
        # data

        # wizard

        # view
        # "views/assets.xml",

        # wizard

        # report

        # menu

        # security
    ],
    # 'qweb': [
    #     'static/src/xml/*.xml',
    # ],
    'assets': {
        'web.assets_backend': [
            'init_web_tree_view/static/src/js/*.js',
            'init_web_tree_view/static/src/scss/*.scss',
            'init_web_tree_view/static/src/xml/*.xml',
        ]
    },
    'demo': [],
    'test': [],
    'images': ['static/description/banner.png'],
    'installable': True,
    'auto_install': False,
    'application': True,
}
