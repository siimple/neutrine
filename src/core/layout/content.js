import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import content styles
import "siimple/scss/layout/_content.scss";

//Content layout component
export default function Content (props) {
    //Content props
    let newProps = reactUtils.filterProps(props, ["className", "size"]);
    //Initialize the content class list
    let classList = ["siimple-content"];
    //Check the content size
    if (typeof props.size === "string") {
        classList.push("siimple-content--" + props.size.toLowerCase());
    }
    //Generate the content className
    newProps.className = reactUtils.classNames(classList, props.className);
    //Render the content div
    return React.createElement("div", newProps, props.children);
}

//Default props
Content.defaultProps = {
    "size": null 
};

