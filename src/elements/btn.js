import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/elements/_btn.scss";

//Button component
export default class Btn extends React.Component {
    render() {
        //Initialize the button props 
        let props = omit(this.props, ["children", "className", "color", "disabled", "fluid"]);
        //Initialize the class names list 
        let className = ["siimple-btn"];
        //Add the button color
        if (typeof this.props.color === "string") {
            className.push("siimple-btn--" + this.props.color.toLowerCase().trim());
        }
        //Add the button disabled option
        if (this.props.disabled === true) {
            className.push("siimple-btn--disabled");
        }
        //Check the fluid property
        if (this.props.fluid === true) {
            //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
            className.push("siimple-btn--fluid");
        }
        //Append the provided class names
        props.className = concat(className, this.props.className);
        //Return the button element
        return h("div", props, this.props.children);
    }
}

//Default properties values
Btn.defaultProps = { 
    color: "blue", 
    disabled: false, 
    fluid: false 
};

