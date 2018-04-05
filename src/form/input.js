import React from "react";
import {hyperscript ad h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_input.scss";

//Input component
export default class Input extends React.Component {
    render() {
        //Clone the input props
        let props = omit(this.props, ["fluid", "children"]);
        //Initialize the input style
        props.className = ["siimple-input"];
        //Check the fluid property
        if (this.props.fluid === true) {
            props.className.push("siimple-input--fluid");
        }
        return h("input", props);
    }
}

//Input default props
Input.defaultProps = {
    fluid: false, 
    style: null
};

