import React from "react";

//Import utils
import * as reactUtils from "../../utils/react.js";

//Import alert styles
import "siimple/scss/components/_alert.scss";

//Alert component
export function Alert (props) {
    //Clone the alert props 
    let newProps = reactUtils.filterProps(props, ["className", "color"]);
    //Initialize the class list
    let classList = ["siimple-alert"];
    //Check the alert color property
    if (typeof props.color === "string") {
        classList.push("siimple-alert--" + props.color.toLowerCase().trim());
    }
    //Append the provided class list 
    newProps.className = reactUtils.classNames(classList, props.className);
    return React.createElement("div", newProps, props.children);
}
//Alert default props
Alert.defaultProps = { 
    "color": "blue" 
};

//Alert title component 
export function AlertTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-alert-title");
}

//Alert close component
export function AlertClose (props) {
    return reactUtils.basicComponent("div", props, "siimple-alert-close");
}

