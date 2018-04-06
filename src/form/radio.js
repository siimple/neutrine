import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit, uniqueId} from "kofi";

import "siimple/scss/form/_radio.scss";

//Radio component 
export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.id = uniqueId();
    }
    
    render() {
        //Switch input default props
        let inputProps = omit(this.props, ["style", "id"]);
        inputProps.type = "radio";
        inputProps.id = (typeof this.props.id === "string") ? this.props.id : this.id;
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: inputProps.id}, null)
        ];
        //Return the radio element
        return h("div", {className: "siimple-radio", style: this.props.style}, children);
    } 
}

//Radio component default props
Radio.defaultProps = {style: null};

