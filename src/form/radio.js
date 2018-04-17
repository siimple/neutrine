import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
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
        let inputProps = omit(this.props, ["radioRef", "children", "className", "style", "id"]);
        inputProps.type = "radio";
        inputProps.id = (typeof this.props.id === "string") ? this.props.id : this.id;
        //Check the radio ref property
        if (this.props.radioRef) {
            inputProps.ref = this.props.radioRef;
        }
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: inputProps.id}, null)
        ];
        //Radio class name
        let className = classNames("siimple-radio", this.props.className);
        //Return the radio element
        return h("div", {className: className, style: this.props.style}, children);
    } 
}

//Radio component default props
Radio.defaultProps = {
    radioRef: null,
    style: null
};

