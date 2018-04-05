import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_field.scss";

//Form field component
export default class Field extends React.Component {
    render() {
        let children = [];
        //Check the label prop
        if (typeof this.props.label === "string") {
            children.push(h("div", {className: "siimple-form-field-label"}, this.props.label));
        }
        //Append the children
        if (typeof this.props.children !== "undefined") {
            children = children.concat(this.props.children);
        }
        //Check the helper prop
        if (typeof this.props.helper === "string") {
            children.push(h("div", {className: "siimple-form-field-helper"}, this.props.helper));
        }
        return h("div", {className: "siimple-form-field", style: this.props.style}, children);
    }
}

//Form field default props
Field.defaultProps = { 
    label: null, 
    helper: null,
    style: null
};
