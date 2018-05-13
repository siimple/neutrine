import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_heading.scss";

//Heading class
export default class Heading extends React.Component {
    render() {
        //Initialize the header props
        let props = getProps(this.props, ["type", "className"]);
        //Initialize the header class list
        let classList = [];
        //Check the header type
        if (typeof this.props.type === "string" && this.props.type.charAt(0).toLowerCase() === "h" && this.props.type.length === 2) {
            classList.push("siimple-" + this.props.type.toLowerCase().trim());
        }
        //Generate the header classname
        props.className = classNames(classList, this.props.className);
        //Return the heading element
        return React.createElement("div", props, this.props.children);
    }
}

//Default heading props
Heading.defaultProps = {
    type: "h1",
    style: null
};

