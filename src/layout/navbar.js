import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_navbar.scss";
import "siimple/scss/helpers/_breakpoints.scss";

//Navbar default class
export class Navbar extends React.Component {
    render() {
        //Clone the navbar props 
        let props = getProps(this.props, ["className", "color", "size"]);
        //Initialize the class list
        let classList = ["siimple-navbar"];
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-navbar--" + this.props.color.toLowerCase());
        }
        //Check the size
        if (typeof this.props.size === "string") {
            classList.push("siimple--" + this.props.size.toLowerCase());
        }
        //Generate the navbar classname
        props.className = classNames(classList, this.props.className);
        //Render the navbar
        return React.createElement("div", props, this.props.children);
    }
}

//Navbar default props
Navbar.defaultProps = {
    color: null, 
    size: null,
    style: null
};

//Navbar title element
export class NavbarTitle extends React.Component {
    render() {
        //Initialize the title element props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-navbar-title", this.props.className);
        //Render the navbar title
        return React.createElement("div", props, this.props.children);
    }
}

//Navbar title default props
NavbarTitle.defaultProps = {
    style: null
};

//Navbar subtitle class
export class NavbarSubtitle extends React.Component {
    render() {
        //Clone the subtitle props 
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-navbar-subtitle", this.props.className);
        //Return the navbar subtitle element
        return React.createElement("div", props, this.props.children);
    }
}

//Navbar subtitle default props 
NavbarSubtitle.defaultProps = {
    style: null
};

//Navbar item element
export class NavbarItem extends React.Component {
    render() {
        //Clone the navbar item props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-navbar-item", this.props.className);
        //Render the navbar link
        return React.createElement("div", props, this.props.children);
    }
}

//Navbar item default props
NavbarItem.defaultProps = {
    style: null
};

