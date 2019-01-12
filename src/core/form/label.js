import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import label styles
import "siimple/scss/form/_label.scss";

//Label component
export default function Label (props) {
    return reactUtils.basicComponent("div", props, "siimple-label");
}

