import React from "react";

//Import component utils
import * as utils from "../../utils/react.js";

//Import heading styles
import "siimple/scss/typography/_heading.scss";

//Heading class
export default function Heading (props) {
    //Initialize the header props
    let newProps = utils.filterProps(props, ["type", "className"]);
    //Initialize the header class list
    let classList = [];
    //Check the header type
    if (typeof props.type === "string" && props.type.charAt(0).toLowerCase() === "h" && props.type.length === 2) {
        classList.push("siimple-" + props.type.toLowerCase().trim());
    }
    //Generate the header classname
    newProps.className = utils.classNames(classList, props.className);
    //Return the heading element
    return React.createElement("div", newProps, props.children);
}

//Default heading props
Heading.defaultProps = {
    "type": "h1"
};

