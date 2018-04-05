import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_switch.scss";

//Generate a random ID
let randomID = function () {
    return Math.random().toString(36).slice(2, 9) + Date.now().toString(36); 
};

//Switch component
export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: randomID() 
        };
        //Initialize the referenced elements object
        this.ref = {};
        //Bind handlers
        this.handleChange = this.handleChange.bind(this);
    }

    //Handle the switch change
    handleChange(e) {
        if (typeof this.props.onChange === "function") {
            this.props.onChange.call(null, e.nativeEvent, this.ref.input.checked); 
        }
    }

    //Get or set the switch state
    checked(isChecked) {
        //Check the is checked value
        if (typeof isChecked === "boolean") {
            //Set the checked value
            this.ref.input.checked = isChecked;
        } else {
            //Return if checkbox is checked
            return this.ref.input.checked;
        }
    }

    //Render the switch element
    render() {
        let self = this;
        //Input default props
        let inputProps = {
            id: this.state.id,
            type: "checkbox",
            defaultChecked: this.props.checked,
            name: this.props.name,
            ref: function (i) {
                self.ref.input = i;
            },
            onChange: self.handleChange
        };
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: this.state.id}, null),
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

