//Import dependencies
import React from "react";

//Import table partials
import {Table, TableHeader, TableBody, TableRow, TableCell} from "../../core/components/table.js";

//Import commons
//import * as classNames from "../../commons/dom/class-names.js";

//Find a class-name in a node list
let findClassInNodeList = function (list, className, callback) {
    for(let i = 0; i < list.length; i++) {
        //Check if this node contains the provided class name
        if (list[i].classList.contains(className) === true) {
            return callback.call(null, list[i], i);
        }
    }
    //Item not found
    return null;
};

//Export datatable render component
export default function DataTableRender (props) {
    //Handle bocy cell click
    let handleBodyCellClick = function (event) {
        if (typeof props.onBodyCellClick === "function") {
            //Find the cell class in the nodes list
            return findClassInNodeList(event.nativeEvent.path, "neutrine-datatable-cell", function (node, index) {
                //Get the row and column index
                let rowIndex = parseInt(node.dataset.row);
                let colIndex = parseInt(node.dataset.column);
                //Call the click listener
                return props.onBodyCellClick.call(null, event, rowIndex, colIndex);
            });
        }
    };
    //Build the table header cell
    let headerCells = props.columns.map(function (column, index) {
        //Initialize the cell props
        let cellProps = {
            "className": ["neutrine-datatable-header-cell"],
            "onClick": null,
            "style": column.style,
            "key": index
        };
        //Check the header cell click event listener
        if (typeof props.onHeaderCellClick === "function") {
            //Register the on-click event listener to this cell
            cellProps.onClick = function (event) {
                return props.onHeaderCellClick(event, column.index);
            };
        }
        //Check if column is sortable
        if (typeof column.sortable === "boolean" && column.sortable === true) {
            //Add the sortable class
            //cellProps.className.push("neutrine-datatable-header-cell--sortable");
            cellProps.sortable = true;
            cellProps.order = column.order;
            //Add the column order
            //if (column.order !== null) {
            //    cellProps.className.push("neutrine-datatable-header-cell--" + column.order);
            //}
        }
        //Add the cell column index
        cellProps["data-column"] = column.index;
        //Join other class names
        if (typeof column.className === "string") {
            cellProps.className.push(column.className);
        }
        //Join the class list
        cellProps.className = cellProps.className.join(" ");
        //Save the cell
        return React.createElement(TableCell, cellProps, column.content);
    });
    //Build the row element
    let headerRow = React.createElement(TableRow, {}, headerCells);
    //Build the table body rows
    let bodyRows = props.data.map(function (row, rowIndex) {
        //Initialize the row props
        let rowProps = {
            "className": row.className,
            "key": rowIndex
        };
        //Generate the row cells
        let rowCells = row.cells.map(function (cell, cellIndex) {
            //Get the column
            //let column = props.columns[cellIndex];
            //Initialize the cell props
            let cellProps = {
                "key": cellIndex,
                "className": ["neutrine-datatable-cell"],
                "data-row": "" + rowIndex + "",
                "data-column": "" + cell.index + "",
                "onClick": handleBodyCellClick,
                "style": cell.style
            };
            //Check the custom cell class-name
            if (typeof cell.className === "string") {
                cellProps.className.push(cell.className);
            }
            //Return the cell element
            return React.createElement(TableCell, cellProps, cell.content);
        });
        //Return this row
        return React.createElement(TableRow, rowProps, rowCells);
    });
    //Generate the table props
    let tableProps = {
        "className": "neutrine-datatable-table",
        "border": props.border,
        "striped": props.striped,
        "hover": props.hover
    };
    //Return the table content
    return React.createElement(Table, tableProps, 
        React.createElement(TableHeader, {}, headerRow),
        React.createElement(TableBody, {}, bodyRows)
    );
}

//Table renderer default props
DataTableRender.defaultProps = {
    "columns": [],
    "data": [],
    "border": false,
    "striped": false,
    "hover": false,
    "onHeaderCellClick": null,
    "onBodyCellClick": null
};

