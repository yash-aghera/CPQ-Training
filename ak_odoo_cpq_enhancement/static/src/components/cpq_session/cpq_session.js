/* @odoo-module */

import {registry} from "@web/core/registry";
import {Component, onWillStart} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

// component for display session of product
export class CPQProductSession extends Component {

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.session_data = [];

        onWillStart(async () => {
            // fetch session of product
            let product_id = this.props.action.context.session_product_id;
            this.session_data = await this.orm.searchRead(
                "config.session",
                [['product_id', '=', product_id]],
                ['name', 'product_id', 'partner_id'],
            );
        });

    };

    static template = "ak_odoo_cpq_enhancement.CPQProductSession";

};
// create action
registry.category("actions").add("cpq_product_session", CPQProductSession);
