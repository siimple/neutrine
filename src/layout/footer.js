import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_footer.scss";
import "siimple/scss/helpers/_breakpoints.scss";

//Footer layout component
export default class Footer extends React.Component {
    render() {
        //Clone the footer props 
        let props = getProps(this.props, ["className", "color", "size"]);
        //Initialize the footer class list
        let classList = ["siimple-footer"];
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-footer--" + this.props.color.toLowerCase());
        }
        //Check the content size
        if (typeof this.props.size === "string") {
            classList.push("siimple--" + this.props.size.toLowerCase());
        }
        //Generate the footer classname
        props.className = classNames(classList, this.props.className);
        //Render the footer div
        return React.createElement("div", props, this.props.children);
    }
}

//Default props
Footer.defaultProps = {
    color: null, 
    size: null, 
    style: null
};

