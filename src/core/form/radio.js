import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import radio styles
import "siimple/scss/form/_radio.scss";

//Generate a random id
let randomId = function () {
    return Math.random().toString(36).slice(2, 15);
};

//Radio component 
export const Radio = React.forwardRef(function (props, ref) {
    //Switch input default props
    let inputProps = reactUtils.filterProps(props, ["className", "style", "id"]);
    inputProps.type = "radio";
    inputProps.id = (typeof props.id === "string") ? props.id : randomId;
    //Save the radio reference
    inputProps.ref = ref;
    //Switch children content
    let inputChild = React.createElement("input", inputProps, null);
    let labelChild = React.createElement("label", {htmlFor: inputProps.id}, null);
    //Radio props
    let radioProps = {
        "className": reactUtils.classNames("siimple-radio", props.className),
        "style": props.style
    };
    //Return the radio element
    return React.createElement("div", radioProps, props.children);
});

