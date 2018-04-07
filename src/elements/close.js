import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/elements/_close.scss";

//Close button class
export default class Close extends React.Component {
    render() {
        //Clone the close button props
        let props = omit(this.props, ["children", "className"]);
        props.className = concat(["siimple-close"], this.props.className);
        //Return the close button element
        return h("div", props, null);
    }
}

//Default props
Close.defaultProps = {};

