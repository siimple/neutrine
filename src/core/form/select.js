import React from "react";

//Import components folder
import * as reactUtils from "../../utils/react.js";

//Import select styles
import "siimple/scss/form/_select.scss";

//Select component
export const Select = React.forwardRef(function (props, ref) {
    //Clone the select props
    let selectProps = reactUtils.filterProps(props, ["fluid", "className"])
    //Initialize the select class list
    let classList = ["siimple-select"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-select--fluid");
    }
    //Save the className
    selectProps.className = reactUtils.classNames(classList, props.className);
    //Save the select reference
    selectProps.ref = ref;
    //Return the select element
    return React.createElement("select", selectProps, props.children);
});

