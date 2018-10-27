import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

import "siimple/scss/form/_checkbox.scss";

//Generate a random id
let randomId = function () {
    return Math.random().toString(36).slice(2, 15);
};

//Checkbox component 
export const Checkbox = React.forwardRef(function (props, ref) {
    //Input default props
    let inputProps = getProps(props, ["className", "style", "id", "ref"]);
    inputProps.type = "checkbox";
    inputProps.id = (typeof props.id === "string") ? props.id : randomId();
    //Save the checkbox reference
    inputProps.ref = ref; 
    //Checkbox children content
    let inputChild = React.createElement("input", inputProps, null);
    let labelChild = React.createElement("label", {"htmlFor": inputProps.id}, null);
    //Build the checkbox props
    let checkboxProps = {
        "className": classNames("siimple-checkbox", props.className),
        "style": props.style
    };
    //Return the checkbox element
    return React.createElement("div", checkboxProps, inputChild, labelChild);  
});

