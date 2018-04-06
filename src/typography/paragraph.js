import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_paragraph.scss";

//Paragraph component
export default class Paragraph extends React.Component {
  render() {
    //Return a div with the paragraph class
    return h("div", {className: "siimple-paragraph", style: this.props.style}, this.props.children);
  }
}

//Paragraph default props
Paragraph.defaultProps = {style: null};

