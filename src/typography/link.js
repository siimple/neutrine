import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/typography/_link.scss";

//Export link component 
export default class Link extends React.Component {
    render() {
        //Clone the link props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-link", this.props.className);
        //Return the link element 
        return React.createElement("a", props, this.props.children);
    }
}

//Link default props
Link.defaultProps = {
    style: null
};

