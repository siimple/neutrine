import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_textarea.scss";

//Textarea component 
export default class Textarea extends React.Component {
    render() {
        //Extend the props 
        let props = omit(this.props, ["fluid", "children", "className"]);
        //Initialize the textarea class list 
        let classList = ["siimple-textarea"];
        //Check the fluid attribute
        if (this.props.fluid === true) {
            classList.push("siimple-textarea--fluid");
        }
        //Generate the textare className
        props.className = classNames(classList, this.props.className);
        return h("textarea", props, this.props.children);
    }
}

//Textarea default props 
Textarea.defaultProps = {
    style: null,
    fluid: false
};

