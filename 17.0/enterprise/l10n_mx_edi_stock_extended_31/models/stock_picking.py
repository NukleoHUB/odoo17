from odoo import fields, models


class Picking(models.Model):
    _inherit = 'stock.picking'

    l10n_mx_edi_customs_regime_ids = fields.Many2many(
        string="Customs Regimes",
        help="Regimes associated to the good's transfer (import or export).",
        comodel_name='l10n_mx_edi.customs.regime',
        ondelete='restrict',
    )

    def _l10n_mx_edi_add_picking_cfdi_values(self, cfdi_values):
        # EXTENDS 'l10n_mx_edi_stock'
        super()._l10n_mx_edi_add_picking_cfdi_values(cfdi_values)

        if self.l10n_mx_edi_external_trade and self.picking_type_code in ('outgoing', 'incoming'):
            # 'regimen_aduanero' has been replaced by a new 'regimenes_aduanero' Many2many relationship.
            # We keep the key here (with a None value) for backward compatibility.
            cfdi_values['regimen_aduanero'] = None
            cfdi_values['regimenes_aduanero'] = self.l10n_mx_edi_customs_regime_ids.mapped('code')

        return cfdi_values
