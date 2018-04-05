import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {uniqueId} from "kofi";

import "siimple/scss/form/_switch.scss";

//Switch component
export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        //Internal ID
        this.id = uniqueId();
        //Initialize the referenced elements object
        this.ref = null;
        //Bind handlers
        this.handleChange = this.handleChange.bind(this);
    }

    //Handle the switch change
    handleChange(e) {
        if (typeof this.props.onChange === "function") {
            this.props.onChange.call(null, e.nativeEvent, this.ref.checked); 
        }
    }

    //Get or set the switch state
    checked(isChecked) {
        if (typeof isChecked === "boolean") {
            //Set the checked value
            this.ref.checked = isChecked;
        } else {
            //Return if checkbox is checked
            return this.ref.checked;
        }
    }

    //Render the switch element
    render() {
        let self = this;
        //Input default props
        let inputProps = {
            id: this.id,
            type: "checkbox",
            defaultChecked: this.props.checked,
            name: this.props.name,
            ref: function (i) {
                self.ref = i;
            },
            onChange: self.handleChange
        };
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: this.id}, null),
            h("div", {}, null)
        ];
        //Return the switch element
        return h("div", {className: "siimple-switch", style: this.props.style}, children);
    }
}

//Switch default props
Switch.defaultProps = {
    name: null, 
    checked: true, 
    onChange: null,
    style: null
};

