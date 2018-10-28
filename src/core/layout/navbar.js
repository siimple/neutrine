import React from "react";

//Import components utils
import * as utils from "../utils.js";

//Import navbar styles
import "siimple/scss/layout/_navbar.scss";

//Navbar default class
export class Navbar extends React.Component {
    render() {
        //Clone the navbar props 
        let props = utils.filterProps(this.props, ["className", "color", "size"]);
        //Initialize the class list
        let classList = ["siimple-navbar"];
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-navbar--" + this.props.color.toLowerCase());
        }
        //Check the size
        if (typeof this.props.size === "string") {
            classList.push("siimple-navbar--" + this.props.size.toLowerCase());
        }
        //Generate the navbar classname
        props.className = utils.classNames(classList, this.props.className);
        //Render the navbar
        return React.createElement("div", props, this.props.children);
    }
}

//Navbar default props
Navbar.defaultProps = {
    "color": null, 
    "size": null
};

//Navbar title element
export function NavbarTitle (props) {
    return utils.basicComponent("div", props, "siimple-navbar-title");
}

//Navbar subtitle class
export function NavbarSubtitle (props) {
    return utils.basicComponent("div", props, "siimple-navbar-subtitle");
}

//Navbar item element
export function NavbarItem (props) {
    return utils.basicComponent("div", props, "siimple-navbar-item");
}

