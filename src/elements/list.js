import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/elements/_list.scss";

//List component 
export class List extends React.Component {
    render () {
        return h("div", {className: "siimple-list"}, this.props.children);
    }
}

//List item component 
export class ListItem extends React.Component {
    render() {
        return h("div", {className: "siimple-list-item"}, this.props.children);
    }
}

//List title component 
export class ListTitle extends React.Component {
    render() {
        return h("div", {className: "siimple-list-title"}, this.props.children);
    }
}

