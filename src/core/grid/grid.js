import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import grid styles
import "siimple/scss/grid/_grid.scss";

//Grid class
export function Grid (props) {
    return reactUtils.basicComponent("div", props, "siimple-grid");
}

//Grid row class
export function GridRow (props) {
    return reactUtils.basicComponent("div", props, "siimple-grid-row");
}

//Grid column class
export function GridCol (props) {
    //Extract props
    let newProps = reactUtils.filterProps(props, ["className", "size", "extraLarge", "large", "medium", "small", "extraSmall"]);
    let classList = ["siimple-grid-col"];
    //Check the column size
    if (typeof props.size === "number" || typeof props.size === "string") {
        classList.push("siimple-grid-col--" + props.size);
    }
    if (typeof props.extraLarge === "number" || typeof props.extraLarge === "string") {
        classList.push("siimple-grid-col--xl-" + props.extraLarge);
    }
    if (typeof props.large === "number" || typeof props.large === "string") {
        classList.push("siimple-grid-col--lg-" + props.large);
    }
    if (typeof props.medium === "number" || typeof props.medium === "string") {
        classList.push("siimple-grid-col--md-" + props.medium);
    }
    if (typeof props.small === "number" || typeof props.small === "string") {
        classList.push("siimple-grid-col--sm-" + props.medium);
    }
    if (typeof props.extraSmall === "number" || typeof props.extraSmall === "string") {
        classList.push("siimple-grid-col--xs-" + props.extraSmall);
    }
    //Join all class names
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the grid element
    return React.createElement("div", newProps, props.children);
}

//Column default props
GridCol.defaultProps = {
    "size": null, 
    "extraLarge": null,
    "large": null, 
    "medium": null, 
    "small": null,
    "extraSmall": null
};

