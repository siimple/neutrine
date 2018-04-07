import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit}, from "kofi";

import "siimple/scss/elements/_spinner.scss";

//Spinner class
export default class Spinner extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className", "color", "size"]);
        let classList = ["siimple-spinner"];
        //Check the color attribute
        if(typeof this.props.color === "string") {
            classList.push("siimple-spinner--" + this.props.color);
        }
        //Check the size attribute
        if (typeof this.props.size === "string") {
            classList.push("siimple-spinner--" + this.props.size);
        }
        props.className = concat(classList, this.props.className);
        //Return the spinner element
        return h("div", props, null);
    }
}

//Spinner default props
Spinner.defaultProps = { 
    color: "blue", 
    size: null
};

