import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_label.scss";

//Label component
export default class Label extends React.Component {
    render() {
        //Initialize the label props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-label", this.props.className);
        //Return the label element
        return h("label", props, this.props.children);
    }
}

//Label default props
Label.defaultProps = {
    style: null
};

