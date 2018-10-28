import React from "react";

//Import component utils
import * as utils from "../utils.js";

//Import heading styles
import "siimple/scss/typography/_heading.scss";

//Heading class
export default class Heading extends React.Component {
    render() {
        //Initialize the header props
        let props = utils.filterProps(this.props, ["type", "className"]);
        //Initialize the header class list
        let classList = [];
        //Check the header type
        if (typeof this.props.type === "string" && this.props.type.charAt(0).toLowerCase() === "h" && this.props.type.length === 2) {
            classList.push("siimple-" + this.props.type.toLowerCase().trim());
        }
        //Generate the header classname
        props.className = utils.classNames(classList, this.props.className);
        //Return the heading element
        return React.createElement("div", props, this.props.children);
    }
}

//Default heading props
Heading.defaultProps = {
    "type": "h1"
};

