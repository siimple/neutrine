import React from "react";

//If component
export function If (props) {
    //Check if the condition is true
    if (typeof props.condition === "boolean" && props.condition === true) {
        return React.createElement(React.Fragment, {}, props.children);
    }
    //Condition is not true
    return null;
}

//Default props
If.defaultProps = {
    "condition": true
};

