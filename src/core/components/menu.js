import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import menu styles
import "siimple/scss/components/_menu.scss";

//Menu component
export function Menu (props) {
    return reactUtils.basicComponent("div", props, "siimple-menu");
}

//Menu group component
export function MenuGroup (props) {
    return reactUtils.basicComponents("div", props, "siimple-menu-group");
}

//Menu item
export function MenuItem (props) {
    //Clone the properties 
    let newProps = reactUtils.filterProps(props, ["selected", "className"]);
    //Initialize the menu item class list
    let classList = ["siimple-menu-item"];
    //Check the selected attribute
    if (props.selected === true) {
        classList.push("siimple-menu-item--selected");
    }
    //Generate the menu item classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the menu item element
    return React.createElement("div", newProps, props.children);
}

//Menu item default props
MenuItem.defaultProps = {
    "selected": false
};
