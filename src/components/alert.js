import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/components/_alert.scss";

//Alert component
export class Alert extends React.Component {
    render() {
        //Clone the alert props 
        let props = getProps(this.props, ["className", "color"]);
        //Initialize the class list
        let classList = ["siimple-alert"];
        //Check the alert color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-alert--"  + this.props.color.toLowerCase().trim());
        }
        //Append the provided class list 
        props.className = classNames(classList, this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Alert default props
Alert.defaultProps = { 
    color: "blue" 
};

//Alert title component 
export class AlertTitle extends React.Component {
    render() {
        //Initialize the element props 
        let props = getProps(this.props, ["className"]);
        //Generate the class names
        props.className = classNames(["siimple-alert-title"], this.props.className);
        //Return the alert title element
        return React.createElement("div", props, this.props.children);
    }
}

//Alert title default props 
AlertTitle.defaultProps = {};

