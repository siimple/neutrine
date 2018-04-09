import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/layout/_footer.scss";

//Footer layout component
export default class Footer extends React.Component {
    render() {
        //Clone the footer props 
        let props = omit(this.props, ["children", "className", "color", "size"]);
        //Initialize the footer class list
        let classList = ["siimple-footer"];
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-footer--" + this.props.color.toLowerCase());
        }
        //Check the content size
        if (typeof this.props.size === "string") {
            classList.push("siimple-footer--" + this.props.size.toLowerCase());
        }
        //Generate the footer classname
        props.className = classNames(classList, this.props.className);
        //Render the footer div
        return h("div", props, this.props.children);
    }
}

//Default props
Footer.defaultProps = {
    color: null, 
    size: null, 
    style: null
};

