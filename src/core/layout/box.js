import React from "react";

//Import components utils
import * as utils from "../utils.js";

//Import styles
import "siimple/scss/layout/_box.scss";

//Box layout class
export class Box extends React.Component {
    render() {
        //Clone the box props 
        let props = utils.filterProps(this.props, ["className", "color"]);
        let classList = ["siimple-box"];
        //Check the box color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-box--" + this.props.color.toLowerCase());
        }
        //Save the box className
        props.className = utils.classNames(classList, this.props.className);
        //Return the box component
        return React.createElement("div", props, this.props.children);
    }
}

//Default props
Box.defaultProps = {
    "color": null
};

//Box title
export function BoxTitle (props) {
    return utils.basicComponent("div", props, "siimple-box-title");
}

//Box subtitle 
export function BoxSubtitle (props) {
    return utils.basicComponent("div", props, "siimple-box-subtitle");
}

//Box detail component 
export function BoxDetail (props) {
    return utils.basicComponent("div", props, "siimple-box-detail");
}

