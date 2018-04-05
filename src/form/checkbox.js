import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {uniqueId} from "kofi";

import "siimple/scss/form/_checkbox.scss";

//Checkbox component 
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        //Generate a unique id for the checkbox
        this.id = uniqueId();
        //Initialize the referenced elements object
        this.ref = null;
        //Bind handlers
        this.handleChange = this.handleChange.bind(this);
    }

    //Handle the checkbox change
    handleChange(e) {
        if (typeof this.props.onChange === "function") {
            this.props.onChange.call(null, e.nativeEvent, this.ref.checked); 
        }
    }

    //Get or set the checkbox state
    checked(isChecked) {
        if (typeof isChecked === "boolean") {
            //Set the checked value
            this.ref.checked = isChecked;
        } else {
            //Return if checkbox is checked
            return this.ref.checked;
        }
    }

    //Render the checkbox element
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
            h("label", {htmlFor: this.id}, null)
        ];
        //Return the checkbox element
        return h("div", {className: "siimple-checkbox", style: this.props.style}, children);
    }   
}

//Checkbox default props 
Checkbox.defaultProps = {
    name: null, 
    checked: true, 
    onChange: null,
    style: null
};

