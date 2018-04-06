import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/layout/_tabs.scss";

//Export tabs component
export class Tabs extends React.Component {
    render() {
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
        //Return the tabs element
        return h("div", props, this.props.children);
    }
}

//Tabs default props
Tabs.defaultProps = {
    boxed: true, 
    color: null,
    style: null, 
    className: []
};

//Tabs item component 
export class TabsItem extends React.Component {
    render() {
        //Extend the tabs item properties
        let props = omit(this.props, ["children", "selected", "className"]);
        props.className = concat(["siimple-tabs-item"], this.props.className);
        //Check the selected attribute 
        if (this.props.selected === true) {
            props.className.push("siimple-tabs-item--selected");
        }
        //Return the tab item
        return h("div", props, this.props.children);
    }
}

//Tabs item default props 
TabsItem.defaultProps = {
    selected: false,
    style: null,
    className: []
};

