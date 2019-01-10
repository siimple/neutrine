import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import spinner styles
import "siimple/scss/elements/_spinner.scss";

//Spinner element
export default function Spinner (props) {
    let newProps = reactUtils.getProps(props, ["className", "color", "size"]);
    //Initialize the spinner class-list
    let classList = ["siimple-spinner"];
    //Check the color attribute
    if(typeof props.color === "string") {
        classList.push("siimple-spinner--" + props.color);
    }
    //Check the size attribute
    if (typeof props.size === "string") {
        classList.push("siimple-spinner--" + props.size);
    }
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the spinner element
    return React.createElement("div", newProps, null);
}

//Spinner default props
Spinner.defaultProps = { 
    "color": "primary", 
    "size": null
};

