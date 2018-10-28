import React from "react";

//Import component utils
import * as utils from "../utils.js";

//Import Code styles
import "siimple/scss/typography/_code.scss";

//Export code component 
export default function Code (props) {
    return utils.basicComponent("code", props, "siimple-code");
}

