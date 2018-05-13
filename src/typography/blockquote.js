import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_blockquote.scss";

//Export blockquote component 
export default class Blockquote extends React.Component {
    render() {
        //Clone the blockquote props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-blockquote", this.props.className);
        //Return the blockquote element
        return React.createElement("div", props, this.props.children);
    }
}

//Blockquote default props
Blockquote.defaultProps = {
    style: null
};

