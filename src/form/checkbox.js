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
        let self = this;
        //Input default props
        let props = omit(this.props, ["style", "id"]);
        //Add the checkbox id
        props.id = (typeof this.props.id === "string") ? this.props.id : this.id;
        //Switch children content
        let children = [
            h("input", props, null),
            h("label", {htmlFor: props.id}, null)
        ];
        //Return the checkbox element
        return h("div", {className: "siimple-checkbox", style: this.props.style}, children);
    }   
}

//Checkbox default props 
Checkbox.defaultProps = {style: null};

