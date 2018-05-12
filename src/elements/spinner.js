import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_spinner.scss";

//Spinner class
export default class Spinner extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "color", "size"]);
        let classList = ["siimple-spinner"];
        //Check the color attribute
        if(typeof this.props.color === "string") {
            classList.push("siimple-spinner--" + this.props.color);
        }
        //Check the size attribute
        if (typeof this.props.size === "string") {
            classList.push("siimple-spinner--" + this.props.size);
        }
        props.className = classNames(classList, this.props.className);
        //Return the spinner element
        return React.createElement("div", props, null);
    }
}

//Spinner default props
Spinner.defaultProps = { 
    color: "blue", 
    size: null
};

