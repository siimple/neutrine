import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_select.scss";

//Select component
export default class Select extends React.Component {
    render() {
        //Clone the select props
        let props = omit(this.props, ["fluid", "children"])
        //Initialize the select class
        props.className = ["siimple-select"];
        //Check the fluid property
        if (this.props.fluid === true) {
            props.className.push("siimple-select--fluid");
        }
        //Return the select element
        return h("select", props, this.props.children);
    }
}

//Select element default props
Select.defaultProps = {
    fluid: false, 
    style: null 
};

