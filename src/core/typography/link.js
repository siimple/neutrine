import React from "react";

//Import component utils
import * as utils from "../../utils/react.js";

//Import link styles
import "siimple/scss/typography/_link.scss";

//Export link component 
export default function Link (props) {
    return utils.basicComponent("a", props, "siimple-link");
}

