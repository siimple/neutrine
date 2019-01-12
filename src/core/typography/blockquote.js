import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import blockquote stules
import "siimple/scss/typography/_blockquote.scss";

//Export blockquote component 
export default function Blockquote (props) {
    return reactUtils.basicComponent("div", props, "siimple-blockquote");
}

