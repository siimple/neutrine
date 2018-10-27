import React from "react";

//Import components folder
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import select styles
import "siimple/scss/form/_select.scss";

//Select component
export const Select = React.forwardRef(function (props, ref) {
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

