/** @odoo-module **/

import { jsonrpc } from "@web/core/network/rpc_service";
import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";

patch(WebClient.prototype, {
    setup() {
        super.setup();
        var self = this
        this.companyService = useService("company");
        this.currentCompany = this.companyService.currentCompany;
        jsonrpc('/get/tab/title/',{}).then(function(rec) {
            var new_title = rec
            self.title.setParts({ zopenerp: new_title })
        })
    },
});