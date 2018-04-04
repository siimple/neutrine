import React from "react";
import {hyperscript as h} from "neutrine-utils";

//Export main table component
export class Table extends React.Component {
    render() {
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
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Table default properties
Table.defaultProps = {
    style: null, 
    striped: false, 
    border: false, 
    hover: false
};

//Export table header component
export class TableHeader extends React.Component {
    render() {
        return h("div", {className: "siimple-table-header", style: this.props.style}, this.props.children);
    }
}

//Table header default props
TableHeader.defaultProps = {style: null};

//Export table body component
export class TableBody extends React.Component {
    render() {
        return h("div", {className: "siimple-table-body", style: this.props.style}, this.props.children);
    }
}

//Table body default props
TableBody.defaultProps = {style: null};

//Export table row component
export class TableRow extends React.Component {
    render() {
        return h("div", {className: "siimple-table-row", style: this.props.style}, this.props.children);
    }
}

//Table row default props
TableRow.defaultProps = {style: null};

//Export table cell component
export class TableCell extends React.Component {
    render() {
        return h("div", {className: "siimple-table-cell", style: this.props.style}, this.props.children);
    }
}

//Table cell default props
TableCell.defaultProps = {style: null};

