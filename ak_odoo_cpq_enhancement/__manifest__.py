# -*- coding: utf-8 -*-
{
    'name': 'Odoo CPQ - Custom Product Configurator',
    'version': '18.0.1.0.2',
    'summary': 'CPQ enhancement',
    'description': """
       CPQ enhancement by task of session
    """,
    'author': 'Yash Aghera [Aktiv Software]',
    'category': 'Sales/Sales',
    'depends': ['ak_odoo_cpq'],
    'data': [
        'views/product_template.xml',
        'views/menus.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'ak_odoo_cpq_enhancement/static/src/components/**/*',
        ],
    },
}
