import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_tag.scss";

//Export tag component 
export default class Tag extends React.Component {
    render() {
        //Clone the tag component props
        let props = omit(this.props, ["children", "className", "color"]);
        //Initialize the tag class list 
        let classList = ["siimple-tag"];
        //Check the color attribute
        if (typeof this.props.color === "string") {
            classList.push("siimple-tag--" + this.props.color.toLowerCase().trim());
        }
        //Generate the tag classname
        props.className = classNames(classList, this.props.className);
        //Return the tag element
        return h("div", props, this.props.children);
    }
}

//Tag default props
Tag.defaultProps = {
    color: null,
    style: null
};

