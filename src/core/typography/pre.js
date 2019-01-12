import React from "react";

//Import component utils
import * as utils from "../../utils/react.js";

//Import pre component styles
import "siimple/scss/typography/_pre.scss";

//Export pre component 
export default function Pre (props) {
    return utils.basicComponent("pre", props, "siimple-pre");
}

