/* @odoo-module */

import {Component, useState, useEffect} from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";

// component for display session of product
export class UpdateCustomerRecord extends Component {
    static template = "ak_odoo_cpq_enhancement.UpdateCustomerRecord";
    static props = {
        contactId: Number,
    }

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.contact_list = [];
        this.state = useState({
            name: '',
            phone: '',
            email: '',
            mobile: '',
            website: '',
            updated: false,
        });
        useEffect(() => {
                this.getData();
            }, () => [this.props.contactId]
        );

    };
    /*
    update useState value according to props value
    */
    getData(){
        if(this.props.contactId)
        {
            this.contact_data = this.orm.searchRead(
                "res.partner",
                [['id', '=', this.props.contactId]],
                ['name', 'phone', 'email', 'mobile', 'website'],
            ).then((rec) => {
                    let contact_data = rec[0];
                    this.state.name = contact_data.name
                    this.state.email = contact_data.email
                    this.state.website = contact_data.website
                    this.state.mobile = contact_data.mobile
                    this.state.phone = contact_data.phone
                }
            );
        }
    }
    /*
    update useState value
    */
    updateInputValue(ev){
        this.state.updated = true;
        this.state.name = document.querySelector("#input_name").value;
        this.state.email = document.querySelector("#input_email").value;
        this.state.mobile = document.querySelector("#input_mobile").value;
        this.state.phone = document.querySelector("#input_phone").value;
        this.state.website = document.querySelector("#input_web").value;
    };
    /*
    update record according to form changes
    */
    async onclickSubmit(ev){
        if(!this.state.name){
            return
        }
        await this.orm.write(
            'res.partner',
            [this.props.contactId],
            {name:this.state.name, email:this.state.email, mobile:this.state.mobile, phone:this.state.phone, website:this.state.website},
        ).then((val)=>{
            alert("Record updated successfully.")
        })
    }

};
