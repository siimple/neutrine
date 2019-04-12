import React from "react";
import * as helpers from "../../helpers.js";

//Import box component styles
import "./style.scss";

//Export box main component
export function Box (props) {
    let classList = ["neutrine-box"];
    //Check if box is collapsed
    //if (props.collapsed === true) {
    //    classList.push("neutrine-box--collapsed");
    //}
    //Build box component props
    let boxProps = {
        "className": classList.join(" ");
    };
    //Return main box component
    return React.createElement("div", boxProps, props.children);
}

//Box default props
Box.defaultProps = {
    //"collapsed": false
};

//Box header component
export function BoxHeader (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-box-header"
    });
}

////Header label
//export function BoxLabel (props) {
//    return helpers.createMergedElement("span", props, {
//        "className": "neutrine-box-label"
//    });
//}

//Box body component
export function BoxBody (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-box-body"
    });
}

////Box body title
//export function BoxTitle (props) {
//    return helpers.createMergedElement("div", props, {
//        "className": "neutrine-box-title"
//    });
//}
//
////Box body description
//export function BoxDescription (props) {
//    return helpers.createMergedElement("div", props, {
//        "className": "neutrine-box-description"
//    });
//}

