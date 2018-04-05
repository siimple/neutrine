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
        return h("div", {className: classList}, this.props.children);
    }
}

//List default props 
List.defaultProps = {
    hover: false
};

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

