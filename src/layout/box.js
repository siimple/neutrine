import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/layout/_box.scss";

//Box layout class
export class Box extends React.Component {
    render() {
        //Clone the box props 
        let props = getProps(this.props, ["className", "color"]);
        let classList = ["siimple-box"];
        //Check the box color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-box--" + this.props.color.toLowerCase());
        }
        //Save the box className
        props.className = classNames(classList, this.props.className);
        //Return the box component
        return React.createElement("div", props, this.props.children);
    }
}

//Default props
Box.defaultProps = {
    color: null
};

//Box title
export class BoxTitle extends React.Component {
    render() {
        //Initialize the box title props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-box-title", this.props.className);
        //Return the box title element
        return React.createElement("div", props, this.props.children);
    }
}

//Box title default props 
BoxTitle.defaultProps = {
    style: null
};

//Box subtitle 
export class BoxSubtitle extends React.Component {
    render() {
        //Initialize the box subtitle props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-box-subtitle", this.props.className);
        //Return the box title element
        return React.createElement("div", props, this.props.children);
    }
}

//Box subtitle default props 
BoxSubtitle.defaultProps = {
    style: null
};

//Box detail component 
export class BoxDetail extends React.Component {
    render() {
        //Initialize the box detail props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-box-detail", this.props.className);
        //Return the box detail element
        return React.createElement("div", props, this.props.children);
    }
}

//Box detail default props 
BoxDetail.defaultProps = {
    style: null
};

