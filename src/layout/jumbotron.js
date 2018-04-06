import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export class Jumbotron extends React.Component {
    render() {
        //Clone the jumbotron props 
        let props = omit(this.props, ["children", "className", "color", "size"]);
        //Initialize the jumbotron class names list
        props.className = concat(["siimple-jumbotron"], this.props.className);
        //Check the jumbotron color
        if (typeof this.props.color === "string") {
            props.className.push("siimple-jumbotron--" + this.props.color.toLowerCase());
        }
        //Check the jumbotron size property
        if (typeof this.props.size === "string") {
            props.className.push("siimple-jumbotron--" + this.props.size.toLowerCase());
        }
        //Return the parent div
        return h("div", props, this.props.children);
    }
}

//Jumbotron default props
Jumbotron.defaultProps = {
    color: null, 
    size: null, 
    style: null,
    className: []
};

//Jumbotron title
export class JumbotronTitle extends React.Component {
    render() {
        //Clone the jumbotron props
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-jumbotron-title"], this.props.className);
        //Return the jumbotron title element
        return h("div", props, this.props.children);
    }
}

//Jumbotron title default props 
JumbotronTitle.defaultProps = {
    style: null,
    className: []
};

//Jumbotron subtitle 
export class JumbotronSubtitle extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-jumbotron-subtitle"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//Jumbotron subtitle default props 
JumbotronSubtitle.defaultProps = {
    style: null,
    className: []
};

//Jumbotron detail component 
export class JumbotronDetail extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-jumbotron-detail"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//Jumbotron detail default props 
JumbotronDetail.defaultProps = {
    style: null,
    className: []
};

