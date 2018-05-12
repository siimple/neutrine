import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_rule.scss";

//Close button class
export default class Rule extends React.Component {
    render() {
        //Clone the rule element props
        let props = getProps(this.props, ["className"]);
        props.className = classNames(["siimple-rule"], this.props.className);
        //Return the rule element
        return React.createElement("div", props, null);
    }
}

//Default props
Rule.defaultProps = {};

