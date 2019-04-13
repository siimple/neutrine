import React from "react";
import * as helpers from "../../helpers.js";

//Import aside component styles
import "./style.scss";

//Aside base class
let baseClass = "neutrine-aside";

//Available positions
let asidePositions = ["left", "right", "top", "bottom"];

//Export aside component
export function Aside (props) {
    //Aside styles
    let classList = [baseClass];
    //Check if aside is visible
    if (props.visible === true) {
        classList.push(baseClass + "--visible");
    }
    //Return the aside wrapper
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
}

//Aside default props
Aside.defaultProps = {
    "visible": true
};

//Aside background
export function AsideBackground (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-background"
    });
}

//Aside content
export function AsideContent (props) {
    //Aside content class list
    let classList = [baseClass + "-content"];
    //Check the aside content position
    if (asidePositions.indexOf(props.position) !== -1) {
        classList.push(baseClass + "-content--" + props.position);
    }
    //Build the content props
    let contentProps = {
        "className": classList.join(" "),
        "style": {}
    };
    //Check the position value
    if (props.position === "left" || props.position === "right") {
        contentProps.style["width"] = props.width;
    }
    else if (props.position === "bottom" || props.position === "top") {
        contentProps.style["height"] = props.height;
    }
    //Build the content container
    //let content = React.createElement("div", {"className": baseClass + "-content-container"}, props.children);
    //Return the aside container
    return React.createElement("div", contentProps, props.children);
}

//Aside content default props
AsideContent.defaultProps = {
    "position": "right",
    "width": "400px",
    "height": "400px"
};

//Aside close icon
export function AsideClose (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-close"
    });
}

/*
//Aside header
export function AsideHeader (props) {
    let close = React.createElement("div", {
        "className": baseClass + "-close",
        "onClick": props.onClose
    });
    //Return the aside header
    return React.createElement("div", {"className": baseClass + "-header"}, props.title, close);
}

//Aside header default props
AsideHeader.defaultProps = {
    "title": null,
    "onClose": null
};

//Aside body
export function AsideBody (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-body"
    });
}
*/

