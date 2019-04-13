import React from "react";
import * as helpers from "../../helpers.js";

//Import panel component styles
import "./style.scss";

//Export panel main component
export function Panel (props) {
    let classList = ["neutrine-panel"];
    //Check if panel is collapsed
    //if (props.collapsed === true) {
    //    classList.push("neutrine-panel--collapsed");
    //}
    //Build panel component props
    let panelProps = {
        "className": classList.join(" ")
    };
    //Return main panel component
    return helpers.createMergedElement("div", props, panelProps);
}

//Panel default props
Panel.defaultProps = {
    //"collapsed": false
};

//Panel header component
export function PanelHeader (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-panel-header"
    });
}

//Panel label
export function PanelLabel (props) {
    return helpers.createMergedElement("span", props, {
        "className": "neutrine-panel-label"
    });
}

//Panel body component
export function PanelBody (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-panel-body"
    });
}

//Panel title
export function PanelTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-panel-title"
    });
}

//Panel description
export function PanelDescription (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-panel-description"
    });
}

