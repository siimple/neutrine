import React from "react";
import * as Neutrine from "../../index.js";

let h = React.createElement;

let testGrid = function () {
    return h(Neutrine.Grid, {}, testGridRow(), testGridRow());
};

let testGridRow = function () {
    return h(Neutrine.GridRow, {}, testGridCol(), testGridCol(), testGridCol());
};

let testGridCol = function () {
    return h(Neutrine.GridCol, {size: 4}, "Column");
};


export default class TestGrid extends React.Component {
    render() {
        return h("div", {}, testGrid());
    }
}

