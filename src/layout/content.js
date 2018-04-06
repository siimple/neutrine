import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/layout/_content.scss";

//Content layout component
export default class Content extends React.Component {
    render() {
        //Initialize the content class list
        let classList = ["siimple-content"];
        //Check the content size
        if (typeof this.props.size === "string") {
            classList.push("siimple-content--" + this.props.size.toLowerCase());
        }
        //Render the content div
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Default props
Content.defaultProps = {
    size: null, 
    style: null 
};

