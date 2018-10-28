import React from "react";

//Import components utils
import utils from "../utils.js";

//Import small component styles
import "siimple/scss/typography/_small.scss";

//Export small component 
export default function Small (props) {
    return utils.basicComponent("span", props, "siimple-small");
}

