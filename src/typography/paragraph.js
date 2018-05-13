import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_paragraph.scss";

//Paragraph component
export default class Paragraph extends React.Component {
    render() {
        //Clone the paragraph props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-paragraph", this.props.className);
        //Return a div with the paragraph class
        return React.createElement("div", props, this.props.children);
    }
}

//Paragraph default props
Paragraph.defaultProps = {
    style: null
};

