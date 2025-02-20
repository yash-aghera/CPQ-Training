/* @odoo-module */

import {registry} from "@web/core/registry";
import {Component, useState} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";
import {Many2XAutocomplete} from "@web/views/fields/relational_utils";

// component for display session of product
export class ContactDetail extends Component {
    static template = "ak_odoo_cpq_enhancement.ContactDetail";
    static components = {Many2XAutocomplete}

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.state = useState({
            name: false,
            email: false,
            phone: false,
            mobile: false,
            website: false,
            type: false,
            contact_id: false
        });
    };
    /*
    domain for input field
    */
    getDomain() {
        return [['active', '=', true]];
    };
    /*
    update values from input field value
    */
    async onUpdateContact(ev) {
        const field_values = ['id', 'display_name', 'email', 'type', 'website', 'mobile', 'phone'];
        this.orm.read('res.partner', [ev[0].id], field_values)
        .then((rec) => {
                let contact_data = rec[0];
                this.state.name = ev[0].display_name
                this.state.email = contact_data.email
                this.state.contact_id= contact_data.id
                this.state.type = contact_data.type
                this.state.website = contact_data.website
                this.state.mobile = contact_data.mobile
                this.state.phone = contact_data.phone
            }
        );

    };

};
// create action
registry.category("actions").add("cpq_contact_detail", ContactDetail);
