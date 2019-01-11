import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import breadcrumb styles
import "siimple/scss/components/_breadcrumb.scss";

//Breadcrumb parent component
export function Breadcrumb (props) {
    return reactUtils.basicComponent("div", props, "siimple-breadcrumb");
}

//Breadcrumb item component
export function BreadcrumbItem (props) {
    return reactUtils.basicComponent("div", props, "siimple-breadcrumb-item");
}

