import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_textarea.scss";

//Textarea component 
export default class Textarea extends React.Component {
    render() {
        //Extend the props 
        let props = omit(this.props, ["fluid", "children"]);
        //Add the textarea class 
        props.className = ["siimple-textarea"];
        //Check the fluid attribute
        if (this.props.fluid === true) {
            props.className.push("siimple-textarea--fluid");
        }
        return h("textarea", props, this.props.children);
    }
}

//Textarea default props 
Textarea.defaultProps = {
    style: null,
    fluid: false
};

