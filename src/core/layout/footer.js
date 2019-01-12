import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import footer styles
import "siimple/scss/layout/_footer.scss";

//Footer layout component
export function Footer (props) {
    //Clone the footer props 
    let newProps = reactUtils.filterProps(props, ["className", "color", "size"]);
    //Initialize the footer class list
    let classList = ["siimple-footer"];
    //Check the color
    if (typeof props.color === "string") {
        classList.push("siimple-footer--" + props.color.toLowerCase());
    }
    //Check the content size
    if (typeof props.size === "string") {
        classList.push("siimple-footer--" + props.size.toLowerCase());
    }
    //Generate the footer classname
    newProps.className = reactUtils.classNames(classList, props.className);
    //Render the footer div
    return React.createElement("div", newProps, props.children);
}

//Default props
Footer.defaultProps = {
    "color": null, 
    "size": null 
};

//Footer title
export function FooterTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-footer-title");
}

//Footer subtitle
export function FooterSubtitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-footer-subtitle");
}

//Footer group
export function FooterGroup (props) {
    return reactUtils.basicComponent("div", props, "siimple-footer-group");
}

//Footer paragraph
export function FooterParagraph (props) {
    return reactUtils.basicComponent("div", props, "siimple-footer-paragraph");
}

//Footer link
export function FooterLink (props) {
    return reactUtils.basicComponent("a", props, "siimple-footer-link");
}

//Footer rule
export function FooterRule (props) {
    return reactUtils.basicComponent("div", props, "siimple-footer-rule");
}

