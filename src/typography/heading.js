import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/typography/_heading.scss";

//Heading class
export default class Heading extends React.Component {
    render() {
        //Initialize the header props
        let props = omit(this.props, ["children", "type", "className"]);
        //Initialize the header class names
        props.className = concat([], this.props.className);
        //Check the header type
        if (typeof this.props.type === "string" && this.props.type.charAt(0).toLowerCase() === "h" && this.props.type.length === 2) {
            props.className.push("siimple-" + this.props.type.toLowerCase().trim());
        }
        //Return the heading element
        return h("div", props, this.props.children);
    }
}

//Default heading props
Heading.defaultProps = {
    type: "h1",
    style: null,
    className: []
};

