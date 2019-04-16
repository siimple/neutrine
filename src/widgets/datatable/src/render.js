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

//Render selection element
let CellSelection = function (props) {
    //Initialize the selection item class list
    let classList = ["neutrine-datatable-selection"];
    if (props.selected === true) {
        classList.push("neutrine-datatable-selection--selected");
    }
    //Return the selection element
    return React.createElement("div", {
        "className": classList.join(" ")
    });
};

//Export datatable render component
export default function DataTableRender (props) {
    //Handle body cell click
    let handleBodyCellClick = function (event) {
        //Find the cell class in the nodes list
        return findClassInNodeList(event.nativeEvent.path, "neutrine-datatable-cell", function (node, index) {
            //Get the row and column index
            let rowIndex = parseInt(node.dataset.row);
            let colIndex = parseInt(node.dataset.column);
            //Call the click listener
            return props.onBodyCellClick.call(null, event, rowIndex, colIndex);
        });
    };
    //Handle body cell select
    let handleBodyCellSelect = function (event) {
        console.log("Cell select clicked");
        return findClassInNodeList(event.nativeEvent.path, "neutrine-datatable-cell", function (node, index) {
            let rowIndex = parseInt(node.dataset.row);
            console.log("Row selected: " + rowIndex);
            return props.onBodyCellSelect.call(null, event, rowIndex);
        });
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
    //Check if table is selectable
    if (props.selectable === true) {
        headerCells.unshift(React.createElement(TableCell, {
            "className": "neutrine-datatable-header-cell",
            "onClick": null,
            "key": -1
        }));
    }
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
                "data-row": "" + row.index + "",
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
        //Check if the table is selectable
        if (props.selectable === true) {
            //Initialize the selection cell props
            let selectCellProps = {
                "className": "neutrine-datatable-cell",
                "data-row": "" + row.index + "",
                "onClick": handleBodyCellSelect,
                "key": -1
            };
            //Initialize the selection cell content
            let selectCellContent = React.createElement(CellSelection, {
                "selected": row.selected
            });
            //Save the selection cell
            rowCells.unshift(React.createElement(TableCell, selectCellProps, selectCellContent));
        }
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
    "selectable": false,
    "onHeaderCellClick": null,
    "onHeaderCellSelect": null,
    "onBodyCellClick": null,
    "onBodyCellSelect": null
};

