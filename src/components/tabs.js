import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_tabs.scss";

//Export tabs component
export class Tabs extends React.Component {
    render() {
        //Clone the tabs props 
        let props = getProps(this.props, ["className", "boxed", "color"]);
        //Initialize the tabs class list
        let classList = ["siimple-tabs"];
        //Check the boxed attribute
        if (this.props.boxed === true) {
            classList.push("siimple-tabs--boxed");
        }
        //Add the color tab
        if (typeof this.props.color === "string") {
            classList.push("siimple-tabs--" + this.props.color);
        }
        //Generate the classname
        props.className = classNames(classList, this.props.className);
        //Return the tabs element
        return React.createElement("div", props, this.props.children);
    }
}

//Tabs default props
Tabs.defaultProps = {
    boxed: true, 
    color: null,
    style: null
};

//Tabs item component 
export class TabsItem extends React.Component {
    render() {
        //Extend the tabs item properties
        let props = getProps(this.props, ["selected", "className"]);
        //Initialize the tabs item class list
        let classList = ["siimple-tabs-item"];
        //Check the selected attribute 
        if (this.props.selected === true) {
            classList.push("siimple-tabs-item--selected");
        }
        //Generate the tabs item classname
        props.className = classNames(classList, this.props.className);
        //Return the tab item
        return React.createElement("div", props, this.props.children);
    }
}

//Tabs item default props 
TabsItem.defaultProps = {
    selected: false,
    style: null
};

