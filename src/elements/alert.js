import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/elements/_alert.scss";

//Alert component
export class Alert extends React.Component {
    render() {
        //Clone the alert props 
        let props = omit(this.props, ["children", "className", "color"]);
        //Initialize the class list
        props.className = [ "siimple-alert" ];
        //Check the alert color property
        if (typeof this.props.color === "string") {
            props.className.push("siimple-alert--"  + this.props.color.toLowerCase().trim());
        }
        return h("div", props, this.props.children);
    }
}

//Alert default props
Alert.defaultProps = { 
    color: "blue", 
    style: null 
};

//Alert title component 
export class AlertTitle extends React.Component {
    render() {
        return h("div", {className: "siimple-alert-title"}, this.props.children);
    }
}

