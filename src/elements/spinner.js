import React from "react";
import {hyperscript as h} from "neutrine-utils";

//Spinner class
export default class Spinner extends React.Component {
    render() {
        let classList = ["siimple-spinner"];
        //Check the color attribute
        if(typeof this.props.color === "string") {
            classList.push("siimple-spinner--" + this.props.color);
        }
        //Check the size attribute
        if (typeof this.props.size === "string") {
            classList.push("siimple-spinner--" + this.props.size);
        }
        //Return the spinner element
        return h("div", {className: classList, style: this.props.style}, null);
    }
}

//Spinner default props
Spinner.defaultProps = { 
    color: "blue", 
    size: null, 
    style: null 
};

