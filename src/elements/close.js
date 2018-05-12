import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_close.scss";

//Close button class
export default class Close extends React.Component {
    render() {
        //Clone the close button props
        let props = getProps(this.props, ["className"]);
        props.className = classNames(["siimple-close"], this.props.className);
        //Return the close button element
        return React.createElement("div", props, null);
    }
}

//Default props
Close.defaultProps = {};

