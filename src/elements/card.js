import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/elements/_card.scss";

//Card base component
export class Card extends React.Component {
    render() {
        //Initialize the card props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames(["siimple-card"], this.props.className);
        //Return the card element
        return h("div", props, props.children);
    }
}

//Card base default props 
Card.defaultProps = {};

//Card header component 
export class CardHeader extends React.Component {
    render() {
        //Initialize the card header props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames(["siimple-card-header"], this.props.className);
        return h("div", props, props.children);
    }
}

//Card header default props 
CardHeader.defaultProps = {};

//Card body component 
export class CardBody extends React.Component {
    render() {
        //Initialize the card body props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-card-body"], this.props.className);
        return h("div", props, props.children);
    }
}

//Card body default props 
CardBody.defaultProps = {};

//Card footer component 
export class CardFooter extends React.Component {
    render() {
        //Initialize the card footer props
        let props = omit(this.props, ["children", "className"]); 
        props.className = classNames(["siimple-card-footer"], this.props.className);
        //Return the card footer element
        return h("div", props, props.children);
    }
}

//Card footer default props
CardFooter.defaultProps = {};

//Card title component 
export class CardTitle extends React.Component {
    render() {
        //Initialize the card title props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames(["siimple-card-title"], this.props.className);
        //Return the card title element
        return h("div", props, props.children);
    }
}

//Card title default props 
CardTitle.defaultProps = {};

//Card subtitle component
export class CardSubtitle extends React.Component {
    render() {
        //Initialize the card subtitle props
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames(["siimple-card-subtitle"], this.props.className);
        //Return the card subtitle element
        return h("div", props, props.children);
    }
}

//Card subtitle default props 
CardSubtitle.defaultProps = {};

