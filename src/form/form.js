import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/form/_form.scss";

//Form component
export class Form extends React.Component {
    render() {
        let children = [];
        //Check the title property
        if (typeof this.props.title === "string") {
            children.push(h(FormTitle, {}, this.props.title));
        } 
        //Check the detail property
        if (typeof this.props.detail === "string") {
            children.push(h(FormDetail, {}, this.props.detail));
        }
        return h("div", {className: "siimple-form"}, children, this.props.children);
    }
}

//Form default props
Form.defaultProps = {
    title: null,
    detail: null,
    style: null 
};

//Form title component
export class FormTitle extends React.Component {
    render() {
        return h("div", {className: "siimple-form-title", style: this.props.style}, this.props.children);
    }
}

//Form title default props 
FormTitle.defaultProps = {style: null};

//Form detail component 
export class FormDetail extends React.Component {
    render() {
        return h("div", {className: "siimple-form-detail", style: this.props.style}, this.props.children);
    }
}

//Form detail default props 
FormDetail.defaultProps = {style: null};

//Form rule component 
export class FormRule extends React.Component {
    render() {
        return h("div", {className: "siimple-form-rule", style: this.props.style});
    }
}

//Form rule default props 
FormRule.defaultProps = {style: null};

