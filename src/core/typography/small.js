import React from "react";

//Import components utils
import * as utils from "../../utils/react.js";

//Import small component styles
import "siimple/scss/typography/_small.scss";

//Export small component 
export default function Small (props) {
    return utils.basicComponent("span", props, "siimple-small");
}

