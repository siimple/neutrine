import React from "react";
import * as helpers from "../../helpers.js";

//Import styles
import "./style.scss";

//Step component
export function Steps (props) {
    let newProps = helpers.filterProps(props, ["className", "color"]);
    //Initialize the class list
    let classList = ["neutrine-steps"];
    //Check the color property
    if (typeof props.color === "string") {
        classList.push("neutrine-steps--" + props.color);
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
    let newProps = helpers.filterProps(props, ["className", "current", "checked"]);
    //Initialize the class list
    let classList = ["neutrine-steps-item"];
    //Check the current property
    if (props.current === true) {
        classList.push("neutrine-steps-item--current");
    }
    //Check if the step item is checked
    if (props.checked === true) {
        classList.push("neutrine-steps-item--checked");
    }
    //Add the className prop
    newProps.className = helpers.classNames(classList, props.className);
    //Return the steps wrapper
    return React.createElement("div", newProps, props.children);
}

//Steps item default props
StepsItem.defaultProps = {
    "current": false,
    "checked": false
};

//Steps item title
export function StepsTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-steps-title"
    });
}

//Steps item description
export function StepsDescription (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-steps-description"
    });
}

