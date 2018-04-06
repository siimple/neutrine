import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/layout/_navbar.scss";

//Navbar default class
export class Navbar extends React.Component {
    render() {
        //Initialize the class list
        let classList = concat(["siimple-navbar"], this.props.className);
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-navbar--" + this.props.color.toLowerCase());
        }
        //Check the size
        if (typeof this.props.size === "string") {
            classList.push("siimple-navbar--" + this.props.size.toLowerCase());
        }
        //Render the navbar
        return h("div", {className: classList, style: this.props.style}, props.children);
    }
}

//Navbar default props
Navbar.defaultProps = {
    color: null, 
    size: null,
    style: null,
    className: []
};

//Navbar title element
export class NavbarTitle extends React.Component {
    render() {
        //Initialize the title element props
        let props = omit(this.props, ["className", "children"]);
        props.className = concat(["siimple-navbar-title"], this.props.className);
        //Render the navbar title
        return h("div", props, this.props.children);
    }
}

//Navbar title default props
NavbarTitle.defaultProps = {
    style: null,
    className: []
};

//Navbar subtitle class
export class NavbarSubtitle extends React.Component {
    render() {
        //Clone the subtitle props 
        let props = omit(this.props, ["className", "children"]);
        props.className = concat(["siimple-navbar-subtitle"], this.props.className);
        //Return the navbar subtitle element
        return h("div", props, this.props.children);
    }
}

//Navbar subtitle default props 
NavbarSubtitle.defaultProps = {
    style: null,
    className: []
};

//Navbar item element
export class NavbarItem extends React.Component {
    render() {
        //Clone the navbar item props
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-navbar-item"], this.props.className);
        //Render the navbar link
        return h("div", props, this.props.children);
    }
}

//Navbar item default props
NavbarItem.defaultProps = {
    style: null, 
    className: []
};

