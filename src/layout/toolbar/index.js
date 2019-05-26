//Import dependencies
import React from "react";
//import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import toolbar styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-toolbar";

//Export toolbar wrapper component
export function ToolbarContainer (props) {
    //Toolbar class styles
    let classList = [baseClass + "-container"];
    //Check if toolbar is collapsed
    if (props.collapsed === true) {
        classList.push(baseClass + "-container--collapsed");
    }
    //Return the toolbar element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
}

//Toolbar container default props
ToolbarContainer.defaultProps = {
    "collapsed": true
};

//Export toolbar 
export function Toolbar (props) {
    //Initialize the toolbar props
    let toolbarProps = {
        "className": baseClass
    };
    //Return the sidebar element
    return React.createElement("div", toolbarProps, props.children);
}

//Toolbar default props
Toolbar.defaultProps = {};

//Toolbar toggle
export function ToolbarToggle (props) {
    return React.createElement("div", {
        "className": baseClass + "-toggle",
        "onClick": props.onClick
    });
}

//Toolbar toggle default props
ToolbarToggle.defaultProps = {
    "onClick": null
};

//Toolbar item
export function ToolbarItem (props) {
    //Initialize the item classlist
    let classList = [baseClass + "-item"];
    //Check if this item is active
    if (props.active === true) {
        classList.push(baseClass + "-item--active");
    }
    //Build the item props
    let itemProps = {
        "className": helpers.classNames(classList, props.className),
        "style": {
            "backgroundImage": "url('" + props.icon + "')"
        },
        "onClick": props.onClick
    };
    //Return the item
    return React.createElement("div", itemProps, props.children); 
}

//Toolbar item defualt props
ToolbarItem.defaultProps = {
    "onClick": null,
    "active": false,
    "icon": null
};

//Toolbar group
export function ToolbarGroup (props) {
    return React.createElement("div", {"className": baseClass + "-group"}, props.children);
}

