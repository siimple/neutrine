import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import table styles
import "siimple/scss/components/_table.scss";

//Export main table component
export function Table (props) {
    //Extract props
    let newProps = reactUtils.filterProps(props, ["className", "striped", "border", "hover"]);
    let classList = ["siimple-table"];
    //Check the striped property
    if (props.striped === true) {
        classList.push("siimple-table--striped");
    }
    //Check the border property
    if (props.border === true) {
        classList.push("siimple-table--border");
    }
    //Check the hover property
    if (props.hover === true) {
        classList.push("siimple-table--hover");
    }
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the table wrapper element
    return React.createElement("div", newProps, props.children);
}

//Table default properties
Table.defaultProps = {
    "striped": false, 
    "border": false, 
    "hover": false
};

//Export table header component
export function TableHeader (props) {
    return reactUtils.basicComponent("div", props, "siimple-table-header");
}

//Export table body component
export function TableBody (props) {
    return reactUtils.basicComponent("div", props, "siimple-table-body");
}

//Export table row component
export function TableRow (props) {
    return reactUtils.basicComponent("div", props, "siimple-table-row"); 
}

//Export table cell component
export function TableCell (props) {
    //Extract props
    let newProps = reactUtils.filterProps(props, ["className", "sortable", "order"]);
    let classList = ["siimple-table-cell"];
    //Check the sortable option
    if (typeof props.sortable === "boolean" && props.sortable === true) {
        classList.push("siimple-table-cell--sortable");
    }
    //Check the sort order
    if (typeof props.order === "string") {
        classList.push("siimple-table-cell--" + props.order);
    }
    //Merge classlist
    newProps.className = reqctUtils.classNames(classList, props.className);
    //Return the table cell
    return react.createElement("div", newProps, props.children);
}

//Table cell default props
TableCell.defaultProps = {
    "sortable": false,
    "order": null
};

