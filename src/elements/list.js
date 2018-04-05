import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/elements/_list.scss";

//List component 
export class List extends React.Component {
    render () {
        let classList = ["siimple-list"];
        //Check the hover prop
        if (this.props.hover === true) {
            classList.push("siimple-list--hover");
        }
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//List default props 
List.defaultProps = {
    hover: false,
    style: null
};

//List item component 
export class ListItem extends React.Component {
    render() {
        return h("div", {className: "siimple-list-item", style: this.props.style}, this.props.children);
    }
}

//List item default props 
ListItem.defaultProps = {style: null};

//List title component 
export class ListTitle extends React.Component {
    render() {
        return h("div", {className: "siimple-list-title", style: this.props.style}, this.props.children);
    }
}

//List title default props 
ListTitle.defaultProps = {style: null};

