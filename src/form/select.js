import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_select.scss";

//Select component
export default class Select extends React.Component {
    render() {
        //Clone the select props
        let props = omit(this.props, ["fluid", "selectRef", "children", "className"])
        //Initialize the select class list
        let classList = ["siimple-select"];
        //Check the fluid property
        if (this.props.fluid === true) {
            classList.push("siimple-select--fluid");
        }
        //Save the className
        props.className = classNames(classList, this.props.className);
        //Check the selectRef property
        if (this.props.selectRef) {
            props.ref = this.props.selectRef;
        }
        //Return the select element
        return h("select", props, this.props.children);
    }
}

//Select element default props
Select.defaultProps = {
    fluid: false,
    selectRef: null,
    style: null 
};

