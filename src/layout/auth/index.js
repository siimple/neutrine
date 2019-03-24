//Import dependencies
import React from "react";

//Import styles
import "./style.scss";

//Auth base class
let baseClass = "neutrine-layout-auth";

//Export auth layout 
export function Auth (props) {
    //Return the auth element
    return React.createElement("div", {"className": baseClass}, props.children);
}

//Render the branding section
export function AuthBranding (props) {
    //Return the branding element
    return React.createElement("div", {"className": baseClass + "-branding"}, null, null);
}

//Render the auth content section
export function AuthContent (props) {
    //Return the main content
    return React.createElement("div", {"className": baseClass + "-content"}, props.children);
}

//Export auth title
export function AuthTitle (props) {
    return React.createElement("div", {"className": baseClass + "-title"}, props.children);
}

//Export auth subtitle
export function AuthSubtitle (props) {
    return React.createElement("div", {"className": baseClass + "-subtitle"}, props.children);
}

//Export auth link
export function AuthLink (props) {
    //Initialize the link props
    let linkProps = {
        "align": "center",
        "className": baseClass + "-link",
        "onClick": props.onClick,
        "style": props.style
    };
    //Return the auth link element
    return React.createElement("div", linkProps, props.children);
}

