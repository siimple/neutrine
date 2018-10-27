import React from "react";

//Import components utils
import classNames from "../class-names.js";
import getProps from "../get-props.js";

//Import tip styles
import "siimple/scss/elements/_tip.scss";

//Tip class
export default class Tip extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "color", "icon"]);
        let classList = ["siimple-tip"];
        //Add the tip color
        if (typeof this.props.color === "string") {
            classList.push("siimple-tip--" + this.props.color.toLowerCase().trim());
        }
        //Add the tip icon
        if (typeof this.props.icon === "string") {
            classList.push("siimple-tip--" + this.props.icon.toLowerCase().trim());
        }
        //Generate the class names
        props.className = classNames(classList, this.props.className);
        //Return the tip element
        return React.createElement("div", props, this.props.children);
    }
}

//Initialize the tip element default props
Tip.defaultProps = { 
    "color": "primary", 
    "icon": null
};

