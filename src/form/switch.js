import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit, uniqueId} from "kofi";

import "siimple/scss/form/_switch.scss";

//Switch component
export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.id = uniqueId();
    }

    render() {
        //Input default props
        let inputProps = omit(this.props, ["style", "id", "children", "className"]);
        inputProps.type = "checkbox";
        inputProps.id = (typeof this.props.id === "string") ? this.props.id : this.id;
        //Switch children content
        let children = [
            h("input", inputProps, null),
            h("label", {htmlFor: inputProps.id}, null),
            h("div", {}, null)
        ];
        //Generate the switch className
        let className = classNames("siimple-switch", this.props.className);
        //Return the switch element
        return h("div", {className: className, style: this.props.style}, children);
    }
}

//Switch default props
Switch.defaultProps = {
    style: null
};

