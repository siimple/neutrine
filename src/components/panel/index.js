import React from "react";
import * as helpers from "../../helpers.js";

//Import panel styles
import "./style.scss";

//Panel base class
let baseClass = "neutrine-panel";

//Available panel positions
let panelPositions = ["left", "right", "top", "bottom"];

//Export panel component
export function Panel (props) {
    //Panel styles
    let classList = [baseClass];
    //Check if panel is visible
    if (props.visible === true) {
        classList.push(baseClass + "--visible");
    }
    //Return the panel wrapper
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
}

//Panel default props
Panel.defaultProps = {
    "visible": true
};

//Panel background
export function PanelBackground (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-background"
    });
}

//Panel content
export function PanelContent (props) {
    //Panel content class list
    let classList = [baseClass + "-content"];
    //Check the panel content position
    if (panelPositions.indexOf(props.position) !== -1) {
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
    //Return the panel container
    return React.createElement("div", contentProps, props.children);
}

//Panel content default props
PanelContent.defaultProps = {
    "position": "right",
    "width": "400px",
    "height": "400px"
};

//Panel close icon
export function PanelClose (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-close"
    });
}

/*
//Panel header
export function PanelHeader (props) {
    let close = React.createElement("div", {
        "className": baseClass + "-close",
        "onClick": props.onClose
    });
    //Return the panel header
    return React.createElement("div", {"className": baseClass + "-header"}, props.title, close);
}

//Panel header default props
PanelHeader.defaultProps = {
    "title": null,
    "onClose": null
};

//Panel body
export function PanelBody (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-body"
    });
}
*/

