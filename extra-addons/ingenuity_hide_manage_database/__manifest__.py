# -*- coding: utf-8 -*-
#############################################################################
#
#    Ingenuity Info
#
#    Copyright (C) 2023-TODAY Ingenuity Info(<https://ingenuityinfo.in>)
#    Author: Ingenuity Info(<https://ingenuityinfo.in>)
#
#
#############################################################################
{
    'name': "Hide Manage Database and Powered by Options",
    'author': "Ingenuity Info",
    'category': 'Other',
    'summary': """ This Module will allow to hide the Manage Database and Powered By options from the Odoo Login page. """,
    'website': "https://ingenuityinfo.in",
    'company': 'Ingenuity Info',
    'maintainer': 'Ingenuity Info',
    'version': '17.0.0.0',
    'price': 0.0,
    'currency': 'EUR',
    'description': """ By using this module you can hide secure your Database Information from public users. Also you can able to hide the Powered By Link from the login page.  """,
    'depends': [
        'web',
    ],
    'data': [
        'views/webclient_templates.xml',
    ],
    'qweb': [
        ],
    "assets": {
        "web.assets_backend": [
        ],
        "web.assets_tests": [
        ],
    },
    "images": ['static/description/Banner.gif'],
    "license": "AGPL-3",
    'installable': True,
    'application': True,
    'auto_install': False,
}