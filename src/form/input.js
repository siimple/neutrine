import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_input.scss";

//Input component
export default class Input extends React.Component {
    render() {
        //Clone the input props
        let props = omit(this.props, ["inputRef", "fluid", "children", "className"]);
        //Initialize the input class list
        let classList = ["siimple-input"];
        //Check the fluid property
        if (this.props.fluid === true) {
            classList.push("siimple-input--fluid");
        }
        //Generate the input class name
        props.className = classNames(classList, this.props.className);
        //Check the input reference
        if (this.props.inputRef) {
            props.ref = this.props.inputRef;
        }
        //Return the input element
        return h("input", props);
    }
}

//Input default props
Input.defaultProps = {
    fluid: false,
    inputRef: null
};

