import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_tag.scss";

//Export tag component 
export default class Tag extends React.Component {
    render() {
        //Initialize the tag class list 
        let classList = ["siimple-tag"];
        //Check the color attribute
        if (typeof this.props.color === "string") {
            classList.push("siimple-tag--" + this.props.color.toLowerCase().trim());
        }
        //Return the tag element
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Tag default props
Tag.defaultProps = {
    color: null,
    style: null
};

