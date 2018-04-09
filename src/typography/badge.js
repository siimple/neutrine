import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_badge.scss";

//Export bagde component 
export default class Badge extends React.Component {
    render() {
        //Clone the badge props 
        let props = omit(this.props, ["className", "children", "color"]);
        //Initialize the badge class list 
        let classList = ["siimple-badge"];
        //Check the color attribute
        if (typeof this.props.color === "string") {
            classList.push("siimple-badge--" + this.props.color.toLowerCase().trim());
        }
        //Generate the badge classname
        props.className = classNames(classList, this.props.className);
        //Return the badge element
        return h("div", props, this.props.children);
    }
}

//Badge default props
Badge.defaultProps = {
    color: null,
    style: null
};

