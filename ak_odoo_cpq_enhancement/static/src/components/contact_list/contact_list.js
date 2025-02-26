/* @odoo-module */

import {registry} from "@web/core/registry";
import {Component, useState, onWillStart} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";
import {UpdateCustomerRecord} from "../update_customer/update_customer";

// component for display session of product
export class contactList extends Component {
    static template = "ak_odoo_cpq_enhancement.contactList";
    static components = {UpdateCustomerRecord}

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.contact_list = [];
        this.state = useState({
            contact: 0,
        });
        /*
        update contact list
        */
        onWillStart(async () => {
            this.contact_list = await this.orm.searchRead(
                "res.partner",
                [],
                ['id', 'name', 'phone', 'email', 'mobile', 'website'],
            );
        });
    };
    /*
    update useState value
    */
    RecordClicked(contact){
        this.state.contact = contact;
    };

};
// create action
registry.category("actions").add("cpq_update_customer_detail", contactList);
