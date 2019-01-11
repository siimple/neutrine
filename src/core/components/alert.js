import React from "react";

//Import utils
import * as reactUtils from "../../utils/react.js";

//Import alert styles
import "siimple/scss/components/_alert.scss";

//Alert component
export class Alert extends React.Component {
    render() {
        //Clone the alert props 
        let props = reactUtils.filterProps(this.props, ["className", "color"]);
        //Initialize the class list
        let classList = ["siimple-alert"];
        //Check the alert color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-alert--"  + this.props.color.toLowerCase().trim());
        }
        //Append the provided class list 
        props.className = reactUtils.classNames(classList, this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}
//Alert default props
Alert.defaultProps = { 
    "color": "blue" 
};

//Alert title component 
export class AlertTitle extends React.Component {
    render() {
        return reactUtils.basicComponent("div", this.props, "siimple-alert-title");
    }
}

//Alert close component
export class AlertClose extends React.Component {
    render() {
        return reactUtils.basicComponent("div", this.props, "siimple-alert-close");
    }
}

