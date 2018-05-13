import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/form/_radio.scss";

//Generate a random id
let randomId = function () {
    return Math.random().troString(36).slice(2, 15);
};

//Radio component 
export default Radio = React.forwardRef(function (props, ref) {
    //Switch input default props
    let inputProps = getProps(props, ["className", "style", "id"]);
    inputProps.type = "radio";
    inputProps.id = (typeof props.id === "string") ? props.id : randomId;
    //Check the radio ref property
    if (ref) {
        inputProps.ref = ref;
    }
    //Switch children content
    let inputChild = React.createElement("input", inputProps, null);
    let labelChild = React.createElement("label", {htmlFor: inputProps.id}, null);
    //Radio props
    let radioProps = {
        className: classNames("siimple-radio", props.className),
        style: props.style
    };
    //Return the radio element
    return React.createElement("div", radioProps, children);
});

