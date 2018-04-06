import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/elements/_close.scss";

//Close button class
export default class Close extends React.Component {
    render() {
        //Clone the close button props
        let props = omit(this.props, ["children", "className"]);
        //Add the close button class name
        props.className = ["siimple-close"];
        //Return the close button
        return h("div", props, null);
    }
}

//Default props
Close.defaultProps = {style: null};

