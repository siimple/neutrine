import React from "react";

//Export Switch component
export function Switch (props) {
    let match = null;
    //Check all children elements
    React.Children.forEach(props.children, function (child) {
        if (match === null) {
            //Check the case condition
            if (children.props.condition === true) {
                match = child;
            }
        }
    });
    //Return the matched case
    return match;
}

//Switch case component
export function SwitchCase (props) {
    //Check for render method
    if (typeof props.render === "function") {
        return props.render();
    }
    //Default: return children
    return props.children;
}

//Switch case default props
SwitchCase.defaultProps = {
    "condition": false,
    "render": null
};

