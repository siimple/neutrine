import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_select.scss";

//Select component
export default class Select extends React.Component {
    render() {
        //Clone the select props
        let props = omit(this.props, ["fluid", "children", "className"])
        //Initialize the select class list
        let classList = ["siimple-select"];
        //Check the fluid property
        if (this.props.fluid === true) {
            classList.push("siimple-select--fluid");
        }
        //Save the className
        props.className = classNames(classList, this.props.className);
        //Return the select element
        return h("select", props, this.props.children);
    }
}

//Select element default props
Select.defaultProps = {
    fluid: false, 
    style: null 
};

