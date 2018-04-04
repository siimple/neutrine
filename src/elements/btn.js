import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/elements/_btn.scss";

//Button component
export default class Btn extends React.Component {
    render() {
        let self = this;
        let btnProps = {
            className: ["siimple-btn"],
            onClick: self.props.onClick, 
            style: {}
        };
        //Add the button color
        if (typeof this.props.color === "string") {
            btnProps.className.push("siimple-btn--" + this.props.color.toLowerCase().trim());
        }
        //Add the button disabled option
        if (this.props.disabled === true) {
            btnProps.className.push("siimple-btn--disabled");
        }
        //Check the fluid property
        if (this.props.fluid === true) {
            //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
            btnProps.className.push("siimple-btn--fluid");
        }
        //Check the custom styles
        if (typeof this.props.style === "object" && this.props.style !== null) {
            btnProps.style = Object.assign(btnProps.style, this.props.style);
        }
        //Return the button element
        return h("div", btnProps, this.props.children);
    }
}

//Default properties values
Btn.defaultProps = { 
    color: "blue", 
    disabled: false, 
    onClick: null, 
    style: null, 
    fluid: false 
};

