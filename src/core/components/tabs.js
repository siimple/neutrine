import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import tab styles
import "siimple/scss/components/_tabs.scss";

//Export tabs component
export function Tabs (props) {
    //Clone the tabs props 
    let newProps = reactUtils.filterProps(props, ["className", "boxed"]);
    //Initialize the tabs class list
    let classList = ["siimple-tabs"];
    //Check the boxed attribute
    if (props.boxed === true) {
        classList.push("siimple-tabs--boxed");
    }
    //Generate the classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the tabs element
    return React.createElement("div", newProps, props.children);
}

//Tabs default props
Tabs.defaultProps = {
    "boxed": true 
};

//Tabs item component 
export function TabsItem (props) {
    //Extend the tabs item properties
    let newProps = reactUtils.filterProps(props, ["selected", "className"]);
    //Initialize the tabs item class list
    let classList = ["siimple-tabs-item"];
    //Check the selected attribute 
    if (props.selected === true) {
        classList.push("siimple-tabs-item--selected");
    }
    //Generate the tabs item classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the tab item
    return React.createElement("div", newProps, props.children);
}

//Tabs item default props 
TabsItem.defaultProps = {
    "selected": false
};

