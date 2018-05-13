import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/form/_select.scss";

//Select component
export default Select = React.forwardRef(function (props, key) {
    //Clone the select props
    let selectProps = getProps(props, ["fluid", "className"])
    //Initialize the select class list
    let classList = ["siimple-select"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-select--fluid");
    }
    //Save the className
    selectProps.className = classNames(classList, props.className);
    //Save the select reference
    selectProps.ref = ref;
    //Return the select element
    return React.createElement("select", selectProps, props.children);
});

