import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_select.scss";

//Select component
export default class Select extends React.Component {
    constructor(props) {
        super(props);
        //Initialize the referenced elements object
        this.ref = { select: null };
        //Bind methods
        this.handleChange = this.handleChange.bind(this);
    }

    //Handle select change
    handleChange(e) {
        this.props.onChange.call(null, e.nativeEvent, this.value());
    }

    //Get or set the actual value
    value(val) {
        if(typeof val !== "undefined") {
            //Set the current value
            this.ref.select.value = val;
        } else {
            //Return the input current value
            return this.ref.select.value;
        }
    }

    //Render the element
    render() {
        let self = this;
        let props = {
            className: ["siimple-select"], 
            name: this.props.name, 
            style: this.props.style,
            ref: function (s) {
                self.ref.select = s;
            }
        };
        //Check the disabled property
        if (this.props.disabled === true) {
            props.className.push("siimple-select--disabled");
        }
        //Check the fluid property
        if (this.props.fluid === true) {
            props.className.push("siimple-select--fluid");
        }
        //Check the default value
        if (typeof this.props.value === "string") { 
            props.defaultValue = this.props.value; 
        }
        //Register the change listener
        if (typeof this.props.onChange === "function") { 
            props.onChange = self.handleChange; 
        }
        //Parse all the options of the select
        let options = this.props.options.map(function (opt) {
            return h("option", {value: opt.value}, opt.name);
        });
        //Return the select element
        return h("select", props, options);
    }
}

//Select element default props
Select.defaultProps = {
    name: null, 
    options: [], 
    value: null, 
    onChange: null, 
    disabled: false, 
    fluid: false, 
    style: null 
};

