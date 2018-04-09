import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_code.scss";

//Export code component 
export default class Code extends React.Component {
    render() {
        //Clone the code props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-code", this.props.className);
        //Return the code element
        return h("code", props, this.props.children);
    }
}

//Code default props
Code.defaultProps = {
    style: null
};

