import React from "react";

//Import components utils
import classNames from "../class-names.js";
import getProps from "../get-props.js";

//Import list style
import "siimple/scss/components/_list.scss";

//List component 
export class List extends React.Component {
    render () {
        //Initialize the list props
        let props = getProps(this.props, ["className", "hover"]);
        let classList = ["siimple-list"];
        //Check the hover prop
        if (this.props.hover === true) {
            classList.push("siimple-list--hover");
        }
        props.className = classNames(classList, this.props.className);
        //Return the list element
        return React.createElement("div", props, this.props.children);
    }
}

//List default props 
List.defaultProps = {
    "hover": false
};

//List item component 
export class ListItem extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        let classList = ["siimple-list-item"];
        //Check the selected prop
        if (this.props.selected === true) {
            classList.push("siimple-list-item--selected");
        }
        props.className = classNames(classList, this.props.className);
        //Return the list item element
        return React.createElement("div", props, this.props.children);
    }
}

//List item default props 
ListItem.defaultProps = {
    "selected": false
};

//List title component 
export class ListTitle extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames(["siimple-list-title"], this.props.className);
        //Return the list title element
        return React.createElement("div", props, this.props.children);
    }
}

