import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import breadcrumb styles
import "siimple/scss/components/_breadcrumb.scss";

//Breadcrumb parent component
export class Breadcrumb extends React.Component {
    render() {
        //Initialize the breadcrumb props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-breadcrumb", this.props.className);
        //Return the breadcrumb parent
        return React.createElement("div", props, this.props.children);
    }
}

//Breadcrumb item component
export class BreadcrumbItem extends React.Component {
    render() {
        //Clone the props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-breadcrumb-item", this.props.className);
        //Return the breadcrumb item
        return React.createElement("div", props, this.props.children);
    }
}

