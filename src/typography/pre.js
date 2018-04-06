import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_pre.scss";

//Export pre component 
export default class Pre extends React.Component {
    render() {
        //Return the pre element
        return h("pre", {className: "siimple-pre", style: this.props.style}, this.props.children);
    }
}

//Pre default props
Pre.defaultProps = {style: null};

