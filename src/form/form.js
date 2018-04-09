import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/form/_form.scss";

//Form component
export class Form extends React.Component {
    render() {
        //Form props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-form", this.props.className);
        //Return the form element
        return h("div", props, this.props.children);
    }
}

//Form default props
Form.defaultProps = {
    style: null 
};

//Form title component
export class FormTitle extends React.Component {
    render() {
        //Form title props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-form-title", this.props.className);
        //Return the form title element
        return h("div", props, this.props.children);
    }
}

//Form title default props 
FormTitle.defaultProps = {
    style: null
};

//Form detail component 
export class FormDetail extends React.Component {
    render() {
        //Form detail props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-form-detail", this.props.className);
        //Return the form detail element
        return h("div", props, this.props.children);
    }
}

//Form detail default props 
FormDetail.defaultProps = {
    style: null
};

//Form rule component 
export class FormRule extends React.Component {
    render() {
        return h("div", {className: "siimple-form-rule", style: this.props.style});
    }
}

//Form rule default props 
FormRule.defaultProps = {
    style: null
};

