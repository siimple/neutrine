import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_label.scss";

//Label component
export default class Label extends React.Component {
    render() {
        return h("label", {className: "siimple-label", style: this.props.style}, this.props.children);
    }
}

//Label default props
Label.defaultProps = {style: null};

