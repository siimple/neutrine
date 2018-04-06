import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/layout/_box.scss";

//Box layout class
export default class Box extends React.Component {
    render() {
        //Initialize the box class list
        let classList = ["siimple-box"];
        //Check the box color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-box--" + this.props.color.toLowerCase());
        }
        //Initialize the box children list
        let children = [];
        //Check the title property
        if (typeof this.props.title === "string") {
            children.push(h("div", {className: "siimple-box-title"}, this.props.title));
        }
        //Check the subtitle property
        if (typeof this.props.subtitle === "string") {
            children.push(h("div", {className: "siimple-box-subtitle"}, this.props.subtitle));
        }
        //Check the detail property
        if (typeof this.props.detail === "string") {
            children.push(h("div", {className: "siimple-box-detail"}, this.props.detail));
        }
        //Return the box component
        return h("div", {className: classList, style: this.props.style}, children, this.props.children);
    }
}

//Default props
Box.defaultProps = {
    color: null, 
    title: null, 
    subtitle: null, 
    detail: null,
    style: null
};

