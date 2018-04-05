import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {uniqueId} from "kofi";

import "siimple/scss/form/_radio.scss";

//Radio component 
export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        //Internal ID
        this.id = uniqueId();
        //Initialize the referenced elements object
        this.ref = null;
        //Bind handlers
        this.handleChange = this.handleChange.bind(this);
    }

    //Handle the radio change
    handleChange(e) {
        if (typeof this.props.onChange === "function") {
            this.props.onChange.call(null, e.nativeEvent, this.ref.checked); 
        }
    }

    //Get or set the radio state
    checked(isChecked) {
        if (typeof isChecked === "boolean") {
            //Set the checked value
            this.ref.checked = isChecked;
        } else {
            //Return if radio is checked
            return this.ref.checked;
        }
    }

    //Render the radio element
    render() {
        let self = this;
        //Input default props
        let inputProps = {
            id: this.id,
            type: "radio",
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
        //Return the radio element
        return h("div", {className: "siimple-radio", style: this.props.style}, children);
    } 
}

//Radio component default props
Radio.defaultProps = {
    name: null, 
    checked: true, 
    onChange: null,
    style: null
};

