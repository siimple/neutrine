import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/typography/_small.scss";

//Export small component 
export default class Small extends React.Component {
    render() {
        //Return the small element
        return h("span", {className: "siimple-small", style: this.props.style}, this.props.children);
    }
}

//Small default props
Small.defaultProps = {style: null};

