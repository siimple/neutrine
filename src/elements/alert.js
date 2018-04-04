import React from "react";
import {hyperscript as h} from "neutrine-utils";
import Close from "./close.js";

import "siimple/css/elements/_alert.scss";

//Alert component
export class Alert extends React.Component {
    render() {
        let self = this;
        //Initialize the list with the element classes
        let classList = [ "siimple-alert" ];
        //Check the alert color property
        if (typeof this.props.color === "string") {
            class_list.push("siimple-alert--"  + this.props.color.toLowerCase().trim());
        }
        //Initialize the child elements list
        let children = [h("span", {}, this.props.children)];
        //Check if the close button is enabled
        if (this.props.showClose === true) {
            children.push(h(Close, {onClick: self.props.onCloseClick}));
        }
        //Return the alert
        return h("div", {className: classList, style: this.props.style}, children);
    }
}

//Alert default props
SiimpleAlert.defaultProps = { 
    color: "blue", 
    showClose: false, 
    onCloseClick: null, 
    style: null 
};

//Alert title component 
export class AlertTitle extends React.Component {
    render() {
        return h("div", {className: "siimple-alert-title"}, this.props.children);
    }
}

