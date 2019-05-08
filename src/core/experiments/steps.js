import React from "react";
import * as helpers from "../../helpers.js";

//Import styles
import "siimple/scss/experiments/_steps.scss";

//Step component
export function Steps (props) {
    let newProps = helpers.filterProps(props, ["className", "color"]);
    //Initialize the class list
    let classList = ["siimple-steps"];
    //Check the color property
    if (typeof props.color === "string") {
        classList.push("siimple-steps--" + props.color);
    }
    //Add the className prop
    newProps.className = helpers.classNames(classList, props.className);
    //Return the steps wrapper
    return React.createElement("div", newProps, props.children);
}

//Steps default props
Steps.defaultProps = {
    "color": "primary"
};

//Steps item
export function StepsItem (props) {
    let newProps = helpers.filterProps(props, ["className", "current", "icon"]);
    //Initialize the class list
    let classList = ["siimple-steps-item"];
    //Check the current property
    if (props.current === true) {
        classList.push("siimple-steps-item--current");
    }
    //Check the icon
    if (typeof props.icon === "string") {
        classList.push("siimple-steps-item--" + props.icon);
    }
    //Add the className prop
    newProps.className = helpers.classNames(classList, props.className);
    //Return the steps wrapper
    return React.createElement("div", newProps, props.children);
}

//Steps item default props
StepsItem.defaultProps = {
    "current": false,
    "icon": null
}

//Steps item bubble
export function StepsItemBubble (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-steps-item-bubble"
    });
}

//Steps item title
export function StepsItemTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-steps-item-title"
    });
}

//Steps item description
export function StepsItemDescription (props) {
    return helpers.createMergedElement("div", props, {
        "className": "siimple-steps-item-description"
    });
}

