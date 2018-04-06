import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit, uniqueId} from "kofi";

import "siimple/scss/form/_checkbox.scss";

//Checkbox component 
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        //Generate a unique id for the checkbox
        this.id = uniqueId();
    }
    
    //Render the checkbox element
    render() {
        //Input default props
        let inputProps = omit(this.props, ["style", "id"]);
        inputProps.type = "checkbox";
        inputProps.id = (typeof this.props.id === "string") ? this.props.id : this.id;
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: inputProps.id}, null)
        ];
        //Return the checkbox element
        return h("div", {className: "siimple-checkbox", style: this.props.style}, children);
    }   
}

//Checkbox default props 
Checkbox.defaultProps = {style: null};

