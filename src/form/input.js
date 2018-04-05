import React from "react";
import {hyperscript ad h} from "neutrine-utils";

import "siimple/scss/form/_input.scss";

//Initialize the input types list
let inputTypes = ["text", "password", "email", "date", "number"];

//Input component
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        //Initialize the reference object
        this.ref = {input: null};
        //Bind handler methods
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    //Handle the input change event
    handleChange(e) {
        this.props.onChange.call(null, e.nativeEvent, this.value());
    }

    //Handle the input key press event
    handleKeyUp(e) {
        this.props.onKeyUp.call(null, e.nativeEvent);
    }

    //Get or set the current value
    value(val) {
        if (typeof val !== "undefined") {
            //Save the provided value
            this.ref.input.value = val;
        } else {
            //Return the input current value
            return this.ref.input.value;
        }
    }

    //Render the input element
    render() {
        let self = this;
        let props = {
            className: ["siimple-input"],
            type: "text", 
            name: this.props.name, 
            style: this.props.style,
            ref: function (i) {
                self.ref.input = i;
            }
        };
        //Add the input type
        if (inputTypes.indexOf(this.props.type.toLowerCase()) !== -1) {
            props.type = this.props.type.toLowerCase();
        }
        //Check the fluid property
        if (this.props.fluid === true) {
            props.className.push("siimple-input--fluid");
        }
        //Check the disabled property
        if (this.props.disabled === true) {
            props.className.push("siimple-input--disabled");
        }
        //Check the placeholder
        if (typeof this.props.placeholder === "string") {
            props.placeholder = this.props.placeholder;
        }
        //Check the on change listener
        if (typeof this.props.onChange === "function") { 
            props.onChange = self.handleChange; 
        }
        //Check the on key up listener
        if (typeof this.props.onKeyUp === "function") { 
            props.onKeyUp = self.handleKeyUp; 
        }
        //Check the name attribute
        if (typeof this.props.name === "string") { 
            props.name = this.props.name; 
        }
        //Check the value attribute
        if (typeof this.props.value === "string") { 
            props.defaultValue = this.props.value; 
        }
        //Check for number input 
        if (this.props.type === "number") {
            //Check the max attribute
            if (typeof this.props.max === "string" || typeof this.props.max === "number") {
                props.max = this.props.max.toString();
            }
            //Check the min attribute
            if (typeof this.props.min === "string" || typeof this.props.min === "number") {
                props.min = this.props.min.toString();
            }
        }
        return h("input", props);
    }
}

//Input default props
Input.defaultProps = {
    type: "text", 
    placeholder: "", 
    value: null, 
    fluid: false, 
    disabled: false, 
    style: null,
    onChange: null,
    onKeyUp: null,
    max: null,
    min: null
};

