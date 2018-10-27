import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import card styles
import "siimple/scss/components/_card.scss";

//Card base component
export class Card extends React.Component {
    render() {
        //Initialize the card props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-card", this.props.className);
        //Return the card element
        return React.createElement("div", props, this.props.children);
    }
}

//Card header component 
export class CardHeader extends React.Component {
    render() {
        //Initialize the card header props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-card-header", this.props.className);
        //Return the card body element
        return React.createElement("div", props, this.props.children);
    }
}

//Card body component 
export class CardBody extends React.Component {
    render() {
        //Initialize the card body props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-card-body", this.props.className);
        //Return the card body element
        return React.createElement("div", props, this.props.children);
    }
}

//Card footer component 
export class CardFooter extends React.Component {
    render() {
        //Initialize the card footer props
        let props = getProps(this.props, ["className"]); 
        props.className = classNames("siimple-card-footer", this.props.className);
        //Return the card footer element
        return React.createElement("div", props, this.props.children);
    }
}

//Card title component 
export class CardTitle extends React.Component {
    render() {
        //Initialize the card title props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-card-title", this.props.className);
        //Return the card title element
        return React.createElement("div", props, this.props.children);
    }
}

//Card subtitle component
export class CardSubtitle extends React.Component {
    render() {
        //Initialize the card subtitle props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-card-subtitle", this.props.className);
        //Return the card subtitle element
        return React.createElement("div", props, this.props.children);
    }
}

