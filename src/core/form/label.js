import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import label styles
import "siimple/scss/form/_label.scss";

//Label component
export default class Label extends React.Component {
    render() {
        //Initialize the label props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-label", this.props.className);
        //Return the label element
        return React.createElement("label", props, this.props.children);
    }
}

