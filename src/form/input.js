import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/form/_input.scss";

//Input component
export default Input = React.forwardRef(function (props, ref) {
    //Clone the input props
    let inputProps = getProps(props, ["fluid", "className"]);
    //Initialize the input class list
    let classList = ["siimple-input"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fuild === true) {
        classList.push("siimple-input--fluid");
    }
    //Generate the input class name
    inputProps.className = classNames(classList, props.className);
    //Check the input reference
    if (ref) {
        inputProps.ref = ref;
    }
    //Return the input element
    return React.createElement("input", props);
});

