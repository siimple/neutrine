import React from "react";

//Import components utils
import utils from "../util.js";

//Import blockquote stules
import "siimple/scss/typography/_blockquote.scss";

//Export blockquote component 
export default function Blockquote (props) {
    return utils.basicComponent("div", props, "siimple-blockquote");
}

