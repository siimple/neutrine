import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_pre.scss";

//Export pre component 
export default class Pre extends React.Component {
    render() {
        //Clone the pre props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-pre", this.props.className);
        //Return the pre element
        return h("pre", props, this.props.children);
    }
}

//Pre default props
Pre.defaultProps = {
    style: null
};

