import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_link.scss";

//Export link component 
export default class Link extends React.Component {
    render() {
        //Clone the link props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-link", this.props.className);
        //Return the link element 
        return h("a", props, this.props.children);
    }
}

//Link default props
Link.defaultProps = {
    style: null
};

