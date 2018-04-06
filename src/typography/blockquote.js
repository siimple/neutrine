import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_blockquote.scss";

//Export blockquote component 
export default class Blockquote extends React.Component {
    render() {
        //Return the blockquote element
        return h("div", {className: "siimple-blockquote", style: this.props.style}, this.props.children);
    }
}

//Blockquote default props
Blockquote.defaultProps = {style: null};

