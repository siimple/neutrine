import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_badge.scss";

//Export bagde component 
export default class Badge extends React.Component {
    render() {
        //Initialize the badge class list 
        let classList = ["siimple-badge"];
        //Check the color attribute
        if (typeof this.props.color === "string") {
            classList.push("siimple-badge--" + this.props.color.toLowerCase().trim());
        }
        //Return the badge element
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Badge default props
Badge.defaultProps = {
    color: null,
    style: null
};

