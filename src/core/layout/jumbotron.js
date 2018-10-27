import React from "react";

//Import components utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import jumbotron styles
import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export class Jumbotron extends React.Component {
    render() {
        //Clone the jumbotron props 
        let props = getProps(this.props, ["className", "color", "size"]);
        //Initialize the jumbotron class names list
        let classList = ["siimple-jumbotron"];
        //Check the jumbotron color
        if (typeof this.props.color === "string") {
            classList.push("siimple-jumbotron--" + this.props.color.toLowerCase());
        }
        //Check the jumbotron size property
        if (typeof this.props.size === "string") {
            classList.push("siimple-jumbotron--" + this.props.size.toLowerCase());
        }
        //Generate the jumbotron classname
        props.className = classNames(classList, this.props.className);
        //Return the parent div
        return React.createElement("div", props, this.props.children);
    }
}

//Jumbotron default props
Jumbotron.defaultProps = {
    "color": null, 
    "size": null
};

//Jumbotron title
export class JumbotronTitle extends React.Component {
    render() {
        //Clone the jumbotron props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-jumbotron-title", this.props.className);
        //Return the jumbotron title element
        return React.createElement("div", props, this.props.children);
    }
}

//Jumbotron subtitle 
export class JumbotronSubtitle extends React.Component {
    render() {
        //Clone the jumbotron subtitle props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-jumbotron-subtitle", this.props.className);
        //Return the jumbotron subititle element
        return React.createElement("div", props, this.props.children);
    }
}

//Jumbotron detail component 
export class JumbotronDetail extends React.Component {
    render() {
        //Clone the jumbotron detail props
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-jumbotron-detail", this.props.className);
        //Return the jumbotron detail element
        return React.createElement("div", props, this.props.children);
    }
}

