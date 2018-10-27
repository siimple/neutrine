import React from "react";

//Import component utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import tab styles
import "siimple/scss/components/_tabs.scss";

//Export tabs component
export class Tabs extends React.Component {
    render() {
        //Clone the tabs props 
        let props = getProps(this.props, ["className", "boxed"]);
        //Initialize the tabs class list
        let classList = ["siimple-tabs"];
        //Check the boxed attribute
        if (this.props.boxed === true) {
            classList.push("siimple-tabs--boxed");
        }
        //Generate the classname
        props.className = classNames(classList, this.props.className);
        //Return the tabs element
        return React.createElement("div", props, this.props.children);
    }
}

//Tabs default props
Tabs.defaultProps = {
    "boxed": true 
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
    "selected": false
};

