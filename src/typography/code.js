import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_code.scss";

//Export code component 
export default class Code extends React.Component {
    render() {
        //Return the code element
        return h("code", {className: "siimple-code", style: this.props.style}, this.props.children);
    }
}

//Code default props
Code.defaultProps = {style: null};

