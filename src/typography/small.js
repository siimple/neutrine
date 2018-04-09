import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/typography/_small.scss";

//Export small component 
export default class Small extends React.Component {
    render() {
        //Clone the small props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-small", this.props.className);
        //Return the small element
        return h("span", props, this.props.children);
    }
}

//Small default props
Small.defaultProps = {
    style: null
};

