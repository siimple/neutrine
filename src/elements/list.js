import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/elements/_list.scss";

//List component 
export class List extends React.Component {
    render () {
        //Initialize the list props
        let props = omit(this.props, ["children", "className", "hover"]);
        let classList = ["siimple-list"];
        //Check the hover prop
        if (this.props.hover === true) {
            classList.push("siimple-list--hover");
        }
        props.className = concat(classList, this.props.className);
        //Return the list element
        return h("div", props, this.props.children);
    }
}

//List default props 
List.defaultProps = {
    hover: false
};

//List item component 
export class ListItem extends React.Component {
    render() {
        //Initialize the list item props
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-list-item"], this.props.className);
        //Return the list item element
        return h("div", props, this.props.children);
    }
}

//List item default props 
ListItem.defaultProps = {};

//List title component 
export class ListTitle extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-list-title"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//List title default props 
ListTitle.defaultProps = {};

