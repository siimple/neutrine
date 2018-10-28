import React from "react";

//Import component utils
import * as utils from "../utils.js";

//Import paragraph styles
import "siimple/scss/typography/_paragraph.scss";

//Paragraph component
export default function Paragraph (props) {
    return utils.basicComponent("div", props, "siimple-paragraph");
}

