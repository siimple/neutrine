import React from "react";

//Import components helpers
import * as helpers from "../../helpers.js";

//Import label styles
import "siimple/scss/form/_label.scss";

//Label component
export function Label (props) {
    let newProps = helpers.mergeProps(props, {
        "className": "siimple-label"
    });
    return react.createElement("div", newProps, props.children);
}

