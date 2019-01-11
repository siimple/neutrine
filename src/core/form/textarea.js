import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import textarea utils
import "siimple/scss/form/_textarea.scss";

//Textarea component 
export const Textarea = React.forwardRef(function (props, ref) {
    //Extend the props 
    let textareaProps = reactUtils.filterProps(props, ["fluid", "className"]);
    //Initialize the textarea class list 
    let classList = ["siimple-textarea"];
    //Check the fluid attribute
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("siimple-textarea--fluid");
    }
    //Generate the textare className
    textareaProps.className = reactUtils.classNames(classList, props.className);
    //Save the textarea reference
    textareaProps.ref = ref;
    //Return the textarea element
    return React.createElement("textarea", textareaProps, props.children);
});

