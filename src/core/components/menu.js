import React from "react";

//Import component utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import menu styles
import "siimple/scss/components/_menu.scss";

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
    "selected": false
};
