import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import rule styles
import "siimple/scss/elements/_rule.scss";

//Close button class
export default class Rule extends React.Component {
    render() {
        //Return the rule element
        return reactUtils.basicComponent("div", props, "siimple-rule");
    }
}

