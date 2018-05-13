import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_pre.scss";

//Export pre component 
export default class Pre extends React.Component {
    render() {
        //Clone the pre props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-pre", this.props.className);
        //Return the pre element
        return React.createElement("pre", props, this.props.children);
    }
}

//Pre default props
Pre.defaultProps = {
    style: null
};

