import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export default class Jumbotron extends React.Component {
  render() {
    //Initialize the jumbotron class list
    let classList = ["siimple-jumbotron"];
    //Check the jumbotron color
    if (typeof this.props.color === "string") {
      classList.push("siimple-jumbotron--" + this.props.color.toLowerCase());
    }
    //Check the jumbotron size property
    if (typeof this.props.size === "string") {
      classList.push("siimple-jumbotron--" + this.props.size.toLowerCase());
    }
    //Initialize the jumbotron children array
    let children = [];
    //Check the title property
    if (typeof this.props.title === "string") {
      children.push(h.div({ className: "siimple-jumbotron-title" }, this.props.title));
    }
    //Check the subtitle property
    if (typeof this.props.subtitle === "string") {
      children.push(h.div({ className: "siimple-jumbotron-subtitle" }, this.props.subtitle));
    }
    //Check the detail property
    if (typeof this.props.detail === "string") {
      children.push(h.div({ className: "siimple-jumbotron-detail" }, this.props.detail));
    }
    //Return the parent div
    return h("div", {className: classList, style: this.props.style}, children, this.props.children);
  }
}

//Jumbotron default props
Jumbotron.defaultProps = {
    color: null, 
    size: null, 
    style: null, 
    title: null, 
    subtitle: null, 
    detail: null 
};

