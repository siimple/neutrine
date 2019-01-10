import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import rule styles
import "siimple/scss/elements/_rule.scss";

//Rule component
export default function Rule (props) {
    //Return the rule element
    return reactUtils.basicComponent("div", props, "siimple-rule");
}

