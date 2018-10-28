import React from "react";

//Import components utils
import * as utils from "../utils.js";

//Import jumbotron styles
import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export class Jumbotron extends React.Component {
    render() {
        //Clone the jumbotron props 
        let props = utils.filterProps(this.props, ["className", "color", "size"]);
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
        props.className = utils.classNames(classList, this.props.className);
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
export function JumbotronTitle (props) {
    return utils.basicComponent("div", props, "siimple-jumbotron-title");
}

//Jumbotron subtitle 
export function JumbotronSubtitle (props) {
    return utils.basicComponent("div", props, "siimple-jumbotron-subtitle");
}

//Jumbotron detail component 
export function JumbotronDetail (props) {
    return utils.basicComponent("div", props, "siimple-jumbotron-detail");
}

