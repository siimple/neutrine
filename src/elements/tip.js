import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/elements/_tip.scss";

//Tip class
export default class Tip extends React.Component {
    render() {
        let classList = ["siimple-tip"];
        //Add the tip color
        if (typeof this.props.color === "string") {
            classList.push("siimple-tip--" + this.props.color.toLowerCase().trim());
        }
        //Add the tip icon
        if (typeof this.props.icon === "string") {
            classList.push("siimple-tip--" + this.props.icon.toLowerCase().trim());
        }
        //Return the tip element
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Initialize the tip element default props
Tip.defaultProps = { 
    color: "blue", 
    icon: null, 
    style: null
};

