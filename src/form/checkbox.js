import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_checkbox.scss";

//Checkbox component 
export default class Checkbox extends React.Component {
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

    //Handle the checkbox change
    handleChange(e) {
        if (typeof this.props.onChange === "function") {
            this.props.onChange.call(null, e.nativeEvent, this.ref.input.checked); 
        }
    }

    //Get or set the checkbox state
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

    //Render the checkbox element
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

