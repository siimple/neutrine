//Import dependencies
import React from "react";

//Import neutrine components
import {Btn} from "../../core/elements/btn.js";

//Import subhead styles
import "./style.scss";

//Export subhead component
export function Subhead (props) {
    return React.createElement("div", {"className": "neutrine-subhead"}, props.children);
}

//Export subhead text component
export function SubheadText (props) {
    return React.createElement("div", {"className": "neutrine-subhead-text"}, props.children);
}

//Export subhead button component
export function SubheadBtn (props) {
    //Initialize button props
    let btnProps = {
        "className": "neutrine-subhead-btn",
        "color": props.color,
        "onClick": (typeof props.onClick === "function") ? props.onClick : null
    };
    //Return subhead button element
    return React.createElement(Btn, btnProps, props.children);
}

