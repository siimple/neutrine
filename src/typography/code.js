import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js"

import "siimple/scss/typography/_code.scss";

//Export code component 
export default class Code extends React.Component {
    render() {
        //Clone the code props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-code", this.props.className);
        //Return the code element
        return React.createElement("code", props, this.props.children);
    }
}

//Code default props
Code.defaultProps = {
    style: null
};

