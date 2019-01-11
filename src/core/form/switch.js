import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import switch styles
import "siimple/scss/form/_switch.scss";

//Generate a random id
let randomId = function () {
    return Math.random().toString(36).slice(2, 15);
};

//Switch component
export const Switch = React.forwardRef(function (props, ref) {
    //Input default props
    let inputProps = reactUtils.filterProps(props, ["style", "id", "className"]);
    inputProps.type = "checkbox";
    inputProps.id = (typeof props.id === "string") ? props.id : randomId();
    inputProps.ref = ref;
    //Switch children content
    let inputChild = React.createElement("input", inputProps, null);
    let labelChild = React.createElement("label", {htmlFor: inputProps.id}, null);
    let divChild = React.createElement("div", {}, null);
    //Generate the switch props
    let switchProps = {
        "className": reactUtils.classNames("siimple-switch", props.className),
        "style": props.style
    };
    //Return the switch element
    return React.createElement("div", switchProps, inputChild, labelChild, divChild);
});

