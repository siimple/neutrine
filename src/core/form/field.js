import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import filed styles
import "siimple/scss/form/_field.scss";

//Form field component
export function Field (props) {
    return reactUtils.basicComponent("div", props, "siimple-field");
}

//Field label component 
export function FieldLabel (props) {
    return reactUtils.basicComponent("div", props, "siimple-field-label");
}

//Field helper component
export function FieldHelper (props) {
    return reactUtils.basicComponent("div", props, "siimple-field-helper");
}

