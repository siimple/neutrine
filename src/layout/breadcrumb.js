import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/layout/_breadcrumb.scss";

//Breadcrumb parent component
export class Breadcrumb extends React.Component {
    render() {
        //Return the breadcrumb parent
        return h("div", {className: "siimple-breadcrumb", style: this.props.style }, this.props.children);
    }
}

//Breadcrumb default props
Breadcrumb.defaultProps = {style: null};

//Breadcrumb item component
export class BreadcrumbItem extends React.Component {
    render() {
        //Clone the props
        let props = omit(this.props, ["children", "className"]);
        //Add the breadcrumb class 
        props.className = "siimple-breadcrumb-item";
        //Return the breadcrumb item
        return h("div", props, this.props.children);
    }
}

//Breadcrumb item default props
BreadcrumbItem.defaultProps = {style: null};

