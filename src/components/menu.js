import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_menu.scss";

//Menu component
export class Menu extends React.Component {
    render() {
        //Clone the menu props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-menu", this.props.className);
        //Return the menu element
        return React.createElement("div", props, this.props.children);
    }
}

//Main menu props
Menu.defaultProps = {
    style: null
};

//Menu group component
export class MenuGroup extends React.Component {
    render() {
        //Clone the properties 
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-menu-group", this.props.className);
        //Return the menu group element
        return React.createElement("div", props, this.props.children);
    }
}

//Menu group default props
MenuGroup.defaultProps = {
    style: null
};

//Menu item
export class MenuItem extends React.Component {
    render() {
        //Clone the properties 
        let props = getProps(this.props, ["selected", "className"]);
        //Initialize the menu item class list
        let classList = ["siimple-menu-item"];
        //Check the selected attribute
        if (this.props.selected === true) {
            classList.push("siimple-menu-item--selected");
        }
        //Generate the menu item classname
        props.className = classNames(classList, this.props.className);
        //Return the menu item element
        return React.createElement("div", props, this.props.children);
    }
}

//Menu item default props
MenuItem.defaultProps = {
    style: null
};
