import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_paragraph.scss";

//Paragraph component
export default class Paragraph extends React.Component {
    render() {
        //Clone the paragraph props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-paragraph", this.props.className);
        //Return a div with the paragraph class
        return h("div", props, this.props.children);
    }
}

//Paragraph default props
Paragraph.defaultProps = {
    style: null
};

