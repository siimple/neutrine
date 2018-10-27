import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import form styles
import "siimple/scss/form/_form.scss";

//Form component
export class Form extends React.Component {
    render() {
        //Form props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-form", this.props.className);
        //Return the form element
        return React.createElement("div", props, this.props.children);
    }
}

//Form title component
export class FormTitle extends React.Component {
    render() {
        //Form title props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-form-title", this.props.className);
        //Return the form title element
        return React.createElement("div", props, this.props.children);
    }
}

//Form detail component 
export class FormDetail extends React.Component {
    render() {
        //Form detail props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-form-detail", this.props.className);
        //Return the form detail element
        return React.createElement("div", props, this.props.children);
    }
}

//Form rule component 
export class FormRule extends React.Component {
    render() {
        return React.createElement("div", {"className": "siimple-form-rule"}, null);
    }
}

