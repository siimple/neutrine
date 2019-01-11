import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import list style
import "siimple/scss/components/_list.scss";

//List component 
export function List (props) {
    //Initialize the list props
    let newProps = reactUtils.filterProps(props, ["className", "hover"]);
    let classList = ["siimple-list"];
    //Check the hover prop
    if (props.hover === true) {
        classList.push("siimple-list--hover");
    }
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the list element
    return React.createElement("div", newProps, props.children);
}

//List default props 
List.defaultProps = {
    "hover": false
};

//List item component 
export function ListItem (props) {
    let newProps = reactUtils.filterProps(props, ["className"]);
    let classList = ["siimple-list-item"];
    //Check the selected prop
    if (props.selected === true) {
        classList.push("siimple-list-item--selected");
    }
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the list item element
    return React.createElement("div", newProps, props.children);
}

//List item default props 
ListItem.defaultProps = {
    "selected": false
};

//List title component 
export function ListTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-list-title");
}

