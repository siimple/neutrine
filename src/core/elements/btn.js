import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import button styles
import "siimple/scss/elements/_btn.scss";

//Button component
export default function Btn (props) {
    //Initialize the button props 
    let newProps = reactUtils.getProps(props, ["className", "color", "disabled", "fluid", "small"]);
    //Initialize the class names list 
    let classList = ["siimple-btn"];
    //Add the button color
    if (typeof props.color === "string") {
        classList.push("siimple-btn--" + props.color.toLowerCase().trim());
    }
    //Add the button disabled option
    if (props.disabled === true) {
        classList.push("siimple-btn--disabled");
    }
    //Check the fluid property
    if (props.fluid === true) {
        //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
        classList.push("siimple-btn--fluid");
    }
    //Check the small property
    if (props.small === true) {
        classList.push("siimple-btn--small");
    }
    //Append the provided class names
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the button element
    return React.createElement("div", newProps, props.children);
}

//Default properties values
Btn.defaultProps = { 
    "color": "primary", 
    "disabled": false, 
    "fluid": false,
    "small": false
};

