import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_blockquote.scss";

//Export blockquote component 
export default class Blockquote extends React.Component {
    render() {
        //Clone the blockquote props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-blockquote", this.props.className);
        //Return the blockquote element
        return h("div", props, this.props.children);
    }
}

//Blockquote default props
Blockquote.defaultProps = {
    style: null
};

