import React from "react";

//Import component utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import button styles
import "siimple/scss/elements/_btn.scss";

//Button component
export default class Btn extends React.Component {
    render() {
        //Initialize the button props 
        let props = getProps(this.props, ["className", "color", "disabled", "fluid", "small"]);
        //Initialize the class names list 
        let classList = ["siimple-btn"];
        //Add the button color
        if (typeof this.props.color === "string") {
            classList.push("siimple-btn--" + this.props.color.toLowerCase().trim());
        }
        //Add the button disabled option
        if (this.props.disabled === true) {
            classList.push("siimple-btn--disabled");
        }
        //Check the fluid property
        if (this.props.fluid === true) {
            //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
            classList.push("siimple-btn--fluid");
        }
        //Check the small property
        if (this.props.small === true) {
            classList.push("siimple-btn--small");
        }
        //Append the provided class names
        props.className = classNames(classList, this.props.className);
        //Return the button element
        return React.createElement("div", props, this.props.children);
    }
}

//Default properties values
Btn.defaultProps = { 
    "color": "primary", 
    "disabled": false, 
    "fluid": false,
    "small": false
};

