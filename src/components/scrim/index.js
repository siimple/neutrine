import React from "react";
import * as helpers from "../../helpers.js";
//Import script styles
import "./style.scss";

//Explort Scrim component
//A Scrim is a semi-transparent gradient layer that helps Text appear more readable against backgrounds
export function Scrim (props) {
    return helpers.createMergedElement("div", props, {
        "className": "neutrine-scrim"
    });
}

//Scrim component default props
Scrim.defaultProps = {};

