import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/layout/_box.scss";

//Box layout class
export class Box extends React.Component {
    render() {
        //Clone the box props 
        let props = omit(this.props, ["children", "className", "color"]);
        props.className = concat(["siimple-box"], this.props.className);
        //Check the box color property
        if (typeof this.props.color === "string") {
            props.className.push("siimple-box--" + this.props.color.toLowerCase());
        }
        //Return the box component
        return h("div", props, this.props.children);
    }
}

//Default props
Box.defaultProps = {
    color: null, 
    style: null,
    className: []
};

//Box title
export class BoxTitle extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-box-title"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//Box title default props 
BoxTitle.defaultProps = {
    style: null,
    className: []
};

//Box subtitle 
export class BoxSubtitle extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-box-subtitle"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//Box subtitle default props 
BoxSubtitle.defaultProps = {
    style: null,
    className: []
};

//Box detail component 
export class BoxDetail extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-box-detail"], this.props.className);
        return h("div", props, this.props.children);
    }
}

//Box detail default props 
BoxDetail.defaultProps = {
    style: null,
    className: []
};

