import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_content.scss";

//Content layout component
export default class Content extends React.Component {
    render() {
        //Content props
        let props = getProps(this.props, ["className", "size"]);
        //Initialize the content class list
        let classList = ["siimple-content"];
        //Check the content size
        if (typeof this.props.size === "string") {
            classList.push("siimple--" + this.props.size.toLowerCase());
        }
        //Generate the content className
        props.className = classNames(classList, this.props.className);
        //Render the content div
        return React.createElement("div", props, this.props.children);
    }
}

//Default props
Content.defaultProps = {
    size: null, 
    style: null 
};

