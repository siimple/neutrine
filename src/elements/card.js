import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/elements/_card.scss";

//Card base component
export class Card extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card", style: props.style}, props.children);
    }
}

//Card base default props 
Card.defaultProps = {style: null};

//Card header component 
export class CardHeader extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card-header", style: props.style}, props.children);
    }
}

//Card header default props 
CardHeader.defaultProps = {style: null};

//Card body component 
export class CardBody extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card-body", style: props.style}, props.children);
    }
}

//Card body default props 
CardBody.defaultProps = {style: null};

//Card footer component 
export class CardFooter extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card-footer", style: props.style}, props.children);
    }
}

//Card footer default props
CardFooter.defaultProps = {style: null};

//Card title component 
export class CardTitle extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card-title", style: props.style}, props.children);
    }
}

//Card title default props 
CardTitle.defaultProps = {style: null};

//Card subtitle component
export class CardSubtitle extends React.Component {
    render() {
        let props = this.props;
        return h("div", {className: "siimple-card-subtitle", style: props.style}, props.children);
    }
}

//Card subtitle default props 
CardSubtitle.defaultProps = {style: null};

