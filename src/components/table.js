import React from "react";
import classNames from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/elements/_table.scss";

//Export main table component
export class Table extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "striped", "border", "hover"]);
        let classList = ["siimple-table"];
        //Check the striped property
        if (this.props.striped === true) {
            classList.push("siimple-table--striped");
        }
        //Check the border property
        if (this.props.border === true) {
            classList.push("siimple-table--border");
        }
        //Check the hover property
        if (this.props.hover === true) {
            classList.push("siimple-table--hover");
        }
        props.className = classNames(classList, this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Table default properties
Table.defaultProps = {
    striped: false, 
    border: false, 
    hover: false
};

//Export table header component
export class TableHeader extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-table-header", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Table header default props
TableHeader.defaultProps = {};

//Export table body component
export class TableBody extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-table-body", this.props.className);
        return React.createElement("div", {className: "siimple-table-body", style: this.props.style}, this.props.children);
    }
}

//Table body default props
TableBody.defaultProps = {};

//Export table row component
export class TableRow extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-table-row", this.props.className); 
        return React.createElement("div", props, this.props.children);
    }
}

//Table row default props
TableRow.defaultProps = {};

//Export table cell component
export class TableCell extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-table-cell", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Table cell default props
TableCell.defaultProps = {};

