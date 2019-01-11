import React from "react";

//Import components utils
import * as reactUtils from "../../utils/react.js";

//Import card styles
import "siimple/scss/components/_card.scss";

//Card base component
export function Card (props) {
    return reactUtils.basicComponent("div", props, "siimple-card");
}

//Card header component 
export function CardHeader (props) {
    return reactUtils.basicComponent("div", props, "siimple-card-header");
}

//Card body component 
export function CardBody (proos) {
    return reactUtils.basicComponent("div", props, "siimple-card-body");
}

//Card footer component 
export function CardFooter (props) {
    return reactUtils.basicComponent("div", props, "siimple-card-footer");
}

//Card title component 
export function CardTitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-card-title");
}

//Card subtitle component
export function CardSubtitle (props) {
    return reactUtils.basicComponent("div", props, "siimple-card-subtitle");
}

