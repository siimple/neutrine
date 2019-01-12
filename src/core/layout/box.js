import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import styles
import "siimple/scss/layout/_box.scss";

//Box layout class
export function Box (props) {
    //Clone the box props 
    let newProps = reactUtils.filterProps(props, ["className", "color"]);
    let classList = ["siimple-box"];
    //Check the box color property
    if (typeof props.color === "string") {
        classList.push("siimple-box--" + props.color.toLowerCase());
    }
    //Save the box className
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the box component
    return React.createElement("div", newProps, props.children);
}

//Default props
Box.defaultProps = {
    "color": null
};

//Box title
export function BoxTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-box-title");
}

//Box subtitle 
export function BoxSubtitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-box-subtitle");
}

//Box detail component 
export function BoxDetail (props) {
    return reactUtils.basicComponent("div", props, "siimple-box-detail");
}

