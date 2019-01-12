import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import jumbotron styles
import "siimple/scss/layout/_jumbotron.scss";

//Jumbotron base component
export function Jumbotron (props) {
    //Clone the jumbotron props 
    let newProps = reactUtils.filterProps(props, ["className", "color", "size"]);
    //Initialize the jumbotron class names list
    let classList = ["siimple-jumbotron"];
    //Check the jumbotron color
    if (typeof props.color === "string") {
        classList.push("siimple-jumbotron--" + props.color.toLowerCase());
    }
    //Check the jumbotron size property
    if (typeof props.size === "string") {
        classList.push("siimple-jumbotron--" + props.size.toLowerCase());
    }
    //Generate the jumbotron classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the parent div
    return React.createElement("div", newProps, props.children);
}

//Jumbotron default props
Jumbotron.defaultProps = {
    "color": null, 
    "size": null
};

//Jumbotron title
export function JumbotronTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-jumbotron-title");
}

//Jumbotron subtitle 
export function JumbotronSubtitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-jumbotron-subtitle");
}

//Jumbotron detail component 
export function JumbotronDetail (props) {
    return reactUtils.basicComponent("div", props, "siimple-jumbotron-detail");
}

