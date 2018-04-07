import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/elements/_tip.scss";

//Tip class
export default class Tip extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className", "color", "icon"]);
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
        return h("div", props, this.props.children);
    }
}

//Initialize the tip element default props
Tip.defaultProps = { 
    color: "blue", 
    icon: null
};

