import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_small.scss";

//Export small component 
export default class Small extends React.Component {
    render() {
        //Clone the small props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-small", this.props.className);
        //Return the small element
        return React.createElement("span", props, this.props.children);
    }
}

//Small default props
Small.defaultProps = {
    style: null
};

