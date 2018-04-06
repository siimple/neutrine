import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/layout/_menu.scss";

//Menu component
export class Menu extends React.Component {
    render() {
        return h("div", {className: "siimple-menu", style: this.props.style}, this.props.children);
    }
}

//Main menu props
Menu.defaultProps = {style: null};

//Menu group component
export class MenuGroup extends React.Component {
    render() {
        //Clone the properties 
        let props = omit(this.props, ["children", "className"]);
        props.className = "siimple-menu-group";
        //Return the menu group element
        return h("div", props, this.props.children);
    }
}

//Menu group default props
MenuGroup.defaultProps = {style: null};

//Menu item
export class MenuItem extends React.Component {
    render() {
        //Clone the properties 
        let props = omit(this.props, ["selected", "children", "className"]);
        propsclassName = ["siimple-menu-item"];
        //Check the selected attribute
        if (this.props.selected === true) {
            classList.push("siimple-menu-item--selected");
        }
        //Return the menu item element
        return h("div", props, this.props.children);
    }
}

//Menu item default props
MenuItem.defaultProps = {style: null};
