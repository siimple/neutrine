import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/form/_field.scss";

//Form field component
export class Field extends React.Component {
    render() {
        //Field props 
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-field", this.props.className);
        //Return the field element
        return React.createElement("div", props, this.props.children);
    }
}

//Form field default props
Field.defaultProps = {};

//Field label component 
export class FieldLabel extends React.Component {
    render() {
        //Field label props 
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-field-label", this.props.className);
        //Return the field label element 
        return React.createElement("div", props, this.props.children);
    }
}

//Field label default props 
FieldLabel.defaultProps = {};

//Field helper component
export class FieldHelper extends React.Component {
    render() {
        //Field helper props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-field-helper", this.props.className);
        //Return the field helper element
        return React.createElement("div", props, this.props.children);
    }
}

//Field helper default props
FieldHelper.defaultProps = {};

