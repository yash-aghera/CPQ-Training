# -*- coding: utf-8 -*-

from odoo import models


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def view_cpq_product_session(self):
        """
        return: action for view session's of product
        """
        return {
            "type": "ir.actions.client",
            "target": "current",
            "tag": "cpq_product_session",
            "context": {
                "session_product_id": self.id,
            }
        }
