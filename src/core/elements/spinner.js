import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import spinner styles
import "siimple/scss/elements/_spinner.scss";

//Spinner element
export default function Spinner (props) {
    let props = reactUtils.getProps(this.props, ["className", "color", "size"]);
    //Initialize the spinner class-list
    let classList = ["siimple-spinner"];
    //Check the color attribute
    if(typeof this.props.color === "string") {
        classList.push("siimple-spinner--" + this.props.color);
    }
    //Check the size attribute
    if (typeof this.props.size === "string") {
        classList.push("siimple-spinner--" + this.props.size);
    }
    props.className = reactUtils.classNames(classList, this.props.className);
    //Return the spinner element
    return React.createElement("div", props, null);
}

//Spinner default props
Spinner.defaultProps = { 
    "color": "primary", 
    "size": null
};

