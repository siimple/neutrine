import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import input styles
import "siimple/scss/form/_input.scss";

//Input component
export const Input = React.forwardRef(function (props, ref) {
    //Clone the input props
    let inputProps = reactUtils.filterProps(props, ["fluid", "className"]);
    //Initialize the input class list
    let classList = ["siimple-input"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-input--fluid");
    }
    //Generate the input class name
    inputProps.className = reactUtils.classNames(classList, props.className);
    //Save the input reference
    inputProps.ref = ref;
    //Return the input element
    return React.createElement("input", inputProps);
});

