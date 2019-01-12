import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import form styles
import "siimple/scss/form/_form.scss";

//Form component
export function Form (props) {
    return reactUtils.basicComponent("div", props, "siimple-form");
}

//Form title component
export function FormTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-form-title");
}

//Form detail component 
export function FormDetail (props) {
    return reactUtils.basicComponent("div", props, "siimple-form-detail");
}

//Form rule component 
export function FormRule (props) {
    return React.createElement("div", {"className": "siimple-form-rule"}, null);
}

