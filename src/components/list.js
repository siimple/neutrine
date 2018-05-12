import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_list.scss";

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
    hover: false
};

//List item component 
export class ListItem extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames(["siimple-list-item"], this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//List item default props 
ListItem.defaultProps = {};

//List title component 
export class ListTitle extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames(["siimple-list-title"], this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//List title default props 
ListTitle.defaultProps = {};

