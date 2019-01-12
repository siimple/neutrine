import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import navbar styles
import "siimple/scss/layout/_navbar.scss";

//Navbar default class
export function Navbar (props) {
    //Clone the navbar props 
    let newProps = reactUtils.filterProps(props, ["className", "color", "size"]);
    //Initialize the class list
    let classList = ["siimple-navbar"];
    //Check the color
    if (typeof props.color === "string") {
        classList.push("siimple-navbar--" + props.color.toLowerCase());
    }
    //Check the size
    if (typeof props.size === "string") {
        classList.push("siimple-navbar--" + props.size.toLowerCase());
    }
    //Generate the navbar classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Render the navbar
    return React.createElement("div", newProps, props.children);
}

//Navbar default props
Navbar.defaultProps = {
    "color": null, 
    "size": null
};

//Navbar title element
export function NavbarTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-navbar-title");
}

//Navbar subtitle class
export function NavbarSubtitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-navbar-subtitle");
}

//Navbar item element
export function NavbarItem (props) {
    return reactUtils.basicComponent("div", props, "siimple-navbar-item");
}

