//Import dependencies
import React from "react";

//Import helpers
import * as helpers from "../../../helpers.js";

//Import datatable libs
import {DataTablePagination} from "./pagination.js";
import {DataTableRender} from "./render.js";
import * as DataTableUtils from "./utils.js";
import {DataTableConst} from "./const.js";

//Import styles
import "../styles/datatable.scss";

//DataTable component
export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.resetState(this.props);
        //Page handlers
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        //Body cell handlers
        this.handleBodyCellClick = this.handleBodyCellClick.bind(this);
        this.handleBodyCellSelect = this.handleBodyCellSelect.bind(this);
        //Header cell handlers
        this.handleHeaderCellClick = this.handleHeaderCellClick.bind(this);
        this.handleHeaderCellSelect = this.handleHeaderCellSelect.bind(this);
    }
    //Reset the table state
    resetState(props) {
        //Get the page size
        let pageSize = props.pageSize;
        //Check if pagination is disabled
        if (typeof props.usePagination === "boolean" && props.usePagination === false) {
            pageSize = props.data.length;
        }
        //Return the new state
        let newState = { 
            "page": 0, 
            "pages": this.calculatePages(props.data.length, pageSize),
            "pageSize": pageSize, 
            "sortedColumns": [], 
            "filteredRows": DataTableUtils.range(0, props.data.length),
            "sortedRows": DataTableUtils.range(0, props.data.length),
            "selectedRows": DataTableUtils.arrayToObject(props.selectedRows, {})
        };
        //console.log("Number of pages: " + newState.pages);
        return newState;
    }
    //New props
    componentWillReceiveProps(nextProps) {
        //Check for reset the table state
        if (nextProps.reload === true || this.props.data.length !== nextProps.data.length) {
            return this.setState(this.resetState(props));
        }
        //Build the new state
        let newState = {};
        //Check for new selected rows data
        let selectedRows = nextProps.selectedRows;
        if (selectedRows !== null && Array.isArray(selectedRows) === true && selectedRows.length > 0) {
            newState.selectedRows = DataTableUtils.arrayToObject(selectedRows, {});
        }
        //Save the table state
        this.setState(newState);
    }
    //Calculate the number of pages
    calculatePages(rowsTotal, rowsPage) {
        //console.log(rowsTotal + " - " + rowsPage);
        let pages = rowsTotal / rowsPage;
        //console.log("Calculated pages: ");
        //console.log(pages);
        return (Math.floor(pages) === pages) ? pages : Math.floor(pages) + 1;
    }
    //Page change
    handlePageChange(page) {
        //Update the page
        return this.setState({
            "page": page
        });
    }
    //Handle the page size change
    handlePageSizeChange(size) {
        //Calculate the new number of pages
        let newPagesCount = this.calculatePages(this.state.filteredRows.length, size);
        //console.log("New number of pages: " + newState.pages);
        //Update the state
        return this.setState({
            "page": 0,
            "pages": newPagesCount,
            "pageSize": size
        });
    }
    //Handle the cell click event
    handleBodyCellClick(event, rowIndex, columnIndex) {
        //console.log("Clicked on row: " + rowIndex);
        //console.log("Clicked on cell: " + columnIndex);
        if (typeof this.props.onBodyCellClick === "function") {
            //Get the row and column data
            let row = this.getRow(rowIndex);
            //Call the cell click listener
            return this.props.onBodyCellClick(event.nativeEvent, row, rowIndex, columnIndex);
        }
    }
    //Handle body cell select event
    handleBodyCellSelect(event, index) {
        let isSelected = this.isRowSelected(index);
        //Check for custom row selection handler
        if (typeof this.props.onSelect === "function") {
            let row = this.getRow(index);
            return this.props.onSelect(row, index, isSelected);
        }
        //Select or deselect a row
        if (isSelected === true) {
            //console.log("----> Deselect row");
            return this.deselectRow(index);
        }
        else {
            //console.log("----> Select row");
            return this.selectRow(index);
        }
    }
    //Handle the header cell click event
    handleHeaderCellClick(event, index) {
        //Get the column
        let column = this.getColumn(index);
        //Check if this column is sortable
        if (typeof column.sortable === "boolean" && column.sortable === true) {
            this.addSortColumn(index, event.nativeEvent.shiftKey);
        }
        //Call the header click method
        if (typeof this.props.onHeaderCellClick === "function") {
            this.props.onHeaderCellClick.call(null, event.nativeEvent, index);
        }
    }
    //Handle the header cell select event
    handleHeaderCellSelect(event) {
        //<TODO>
    }
    //Get a column data by index
    getColumn(index) {
        return this.props.columns[index];
    }
    //Get row data by index
    getRow(index) {
        return this.props.data[index];
    }
    //Get filtered rows
    getFilteredRows() {
        let self = this;
        //Return the filtered rows data
        return this.state.filteredRows.map(function (index) {
            return self.props.data[index];
        });
    }
    //Get the page where the row is available
    getRowPage(row) {
        let index = this.state.sortedRows.indexOf(row);
        if (index > -1) {
            let page = index / this.state.pageSize;
            return (Math.floor(page) === page) ? page : Math.floor(page);
        }
        //Default, return null
        return null;
    }
    //Move to the page where the row is displayed
    moveToRowPage(index) {
        let rowPage = this.getRowPage(index);
        if (rowPage !== null && rowPage > -1) {
            return this.moveToPage(rowPage);
        }
    }
    //Count the number of rows
    countRows() {
        return this.props.data.length;
    }
    //Move to a page
    moveToPage(page) {
        if (page >= 0 && page < this.state.pages) {
            return this.setState({
                "page": page
            });
        }
    }
    //Move to the next page
    nextPage() {
        return this.moveToPage(this.state.page + 1);
    }
    //Move to the previous page
    prevPage() {
        return this.moveToPage(this.state.page - 1);
    }
    //Get the current page
    getCurrentPage() {
        return this.state.page;
    }
    //Get the number of pages
    getTotalPages() {
        return this.state.pages;
    }
    //Count the number of filtered rows
    countFilteredRows() {
        return this.state.filteredRows.length;
    }
    //Filter rows
    filter(fn) {
        let self = this;
        //Generate the new filter array
        let filteredRows = DataTableUtils.range(0, this.props.data.length);
        //Check the filtering function
        if (typeof fn === "function") {
            //Filter the array of rows indexes
            filteredRows = filteredRows.filter(function (index) {
                //Return if this row should be keept in the displayed rows 
                return fn.call(null, self.getRow(index), index);
            });
        }
        //Reset the sort rows list
        let sortedRows = this.sortRows(filteredRows, this.state.sortedColumns);
        //Update the table state
        let currentPageSize = this.state.pageSize;
        return this.setState({
            "filteredRows": filteredRows,
            "sortedRows": sortedRows,
            "pages": this.calculatePages(filteredRows.length, currentPageSize),
            "page": 0
        });
    }
    //Check if a column is sorted
    findSortedColumn(index) {
        //Search in the list of sorted columns
        for (let i = 0; i < this.state.sortedColumns.length; i++) {
            if (index === this.state.sortedColumns[i].index) {
                return i;
            }
        }
        //Column not found
        return -1;
    }
    //Add a new sort option
    addSortColumn(columnIndex, shiftPressed) {
        //Get the list of sorted columns
        let sortedColumns = this.state.sortedColumns;
        //Check if this columns exists in the list of sorted columns
        let index = this.findSortedColumn(columnIndex);
        if (index !== -1 && (shiftPressed === true || sortedColumns.length === 1)) {
            //Check the current order value
            if (sortedColumns[index].order === "asc") {
                //Change the order value
                sortedColumns[index].order = "desc";
            }
            else {
                //Remove from the keys array
                sortedColumns.splice(index, 1);
            }
        }
        //Check if the column is not found but the shift is presset
        else if (index === -1 && shiftPressed === true) {
            //Add this column to the list of sorted columns
            sortedColumns.push({
                "index": columnIndex,
                "order": "asc"
            });
        }
        else {
            //Set the column as the unique sorted column
            sortedColumns = [{
                "index": columnIndex,
                "order": "asc"
            }];
        }
        //Sort the data
        let sortedRows = this.sortRows(this.state.filteredRows, sortedColumns);
        //Set the new state
        return this.setState({
            "sortedColumns": sortedColumns, 
            "sortedRows": sortedRows 
        });
    }
    //Sort rows
    sortRows(rows, sortedColumns) {
        //Get columns and data
        let columns = this.props.columns;
        let data = this.props.data;
        //Reset the rows index
        let sortedRows = rows.slice(0); //Clone the array of rows
        if (sortedColumns.length > 0) {
            sortedRows.sort(function (a, b) {
                for (let i = 0; i < sortedColumns.length; i++) {
                    //Get the column index and order
                    let index  = sortedColumns[i].index;
                    let order = (sortedColumns[i].order === "asc") ? 1 : -1;
                    //Check for custom sort method
                    if (typeof columns[index].sort === "function") {
                        let result = columns[index].sort.call(null, data[a], data[b]);
                        if (result !== 0) { 
                            return result * order; 
                        }
                    }
                    //Default sorting
                    else {
                        let key = columns[index].key;
                        //Check if que difference is numeric
                        let numeric = !isNaN(+data[a][key] - +data[b][key]);
                        let value1 = (numeric === true) ? +data[a][key] : data[a][key].toLowerCase();
                        let value2 = (numeric === true) ? +data[b][key] : data[b][key].toLowerCase();
                        //Check for not the same value
                        if (value1 !== value2) { 
                            return ((value1 < value2) ? -1 : 1) * order;
                        }
                    }
                }
                //Equivalent values
                return 0;
            });
        }
        //Return the sorted rows
        return sortedRows;
    }
    ////Add a highlighted row
    //addHighlightedRow(row) {
    //    let highlightedRows = this.state.highlightedRows;
    //    //Check if this row is not highlighted
    //    if (highlightedRows.indexOf(row) === -1) {
    //        //Insert the new row index
    //        highlightedRows.push(row);
    //        //Update the state
    //        return this.setState({
    //            "highlightedRows": highlightedRows
    //        });
    //    }
    //}
    ////Remove a highlighted row
    //removeHighlightedRow(row) {
    //    let highlightedRows = this.state.highlightedRows;
    //    let index = highlightedRows.indexOf(row);
    //    //Check if this row is not highlighted
    //    if (index !== -1) {
    //        //Remove the row
    //        highlightedRows.splice(index, 1);
    //        //Update the state
    //        return this.setState({
    //            "highlightedRows": highlightedRows
    //        });
    //    }
    //}
    ////Check if a row is highlighted
    //isRowHighlighted(index) {
    //    return this.state.highlightedRows.indexOf(index) !== -1;
    //}
    //Select a single row
    selectRow(index) {
        //Get the current selected rows list
        let currentSelectedRows = this.state.selectedRows;
        //Add the provided rows to the selection
        currentSelectedRows["" + index + ""] = true;
        //Update the state
        return this.setState({
            "selectedRows": currentSelectedRows
        });
    }
    //Deselect a single row
    deselectRow(index) {
        //Get the current selected rows list
        let currentSelectedRows = this.state.selectedRows;
        //Remove the provided rows
        delete currentSelectedRows["" + index + ""];
        //Update the table state
        return this.setState({
            "selectedRows": currentSelectedRows
        });
    }
    //Get a list with all selected rows
    getSelectedRows() {
        return Object.keys(this.state.selectedRows).map(function (value) {
            return parseInt(value);
        });
    }
    //Set selected rows
    setSelectedRows(rows) {
        return this.setState({
            "selectedRows": DataTableUtils.arrayToObject(rows, {})
        });
    }
    //Clean selected rows
    cleanSelectedRows() {
        return this.setState({
            "selectedRows": {}
        });
    }
    //Added method to check if a row is selected
    isRowSelected(row) {
        return typeof this.state.selectedRows["" + row + ""] !== "undefined";
    }
    //Get visible columns list
    getVisibleColumns() {
        return this.props.columns.filter(function (column) {
            return !(typeof column.visible === "boolean" && column.visible === false);
        });
    }
    //Render empty table
    renderEmpty() {
        //Empty columns props
        let emptyProps = {
            "className": "neutrine-datatable-empty",
            "align": "center"
        };
        //Render the empty message
        return React.createElement("div", emptyProps, "No columns to display");
    }
    //Render the table
    renderTable(start, end) {
        let self = this;
        //Initialize the table render props
        let visibleColumns = this.getVisibleColumns();
        let renderProps = {
            "columns": [],
            "data": [],
            "border": this.props.border,
            "striped": this.props.striped,
            "hover": this.props.hover,
            "selectable": this.props.selectable,
            "onHeaderCellClick": self.handleHeaderCellClick,
            //"onHeaderCellSelect": self.handleHeaderCellSelect,
            "onBodyCellClick": self.handleBodyCellClick,
            "onBodyCellSelect": self.handleBodyCellSelect
        };
        //Add the table columns
        this.props.columns.forEach(function (column, index) {
            //Check if this column is not visible
            if (typeof column.visible === "boolean" && column.visible === false) {
                return null;
            }
            //Initialize the colum properties
            let columnProps = {
                "index": index,
                "content": column.title,
                "sortable": false,
                "order": null,
                "className": null,
                "style": null
            };
            //Check if column is sortable
            if (typeof column.sortable === "boolean" && column.sortable === true) {
                //Set sortable column
                columnProps.sortable = true;
                //Check the order of this column
                let columnOrder = self.findSortedColumn(index);
                if (columnOrder !== -1) {
                    columnProps.order = self.state.sortedColumns[columnOrder].order.toLowerCase();
                }
            }
            //Check the column header className
            if (typeof column.headerClassName === "string") {
                columnProps.className = column.headerClassName;
            }
            //Check the column header style
            if (typeof column.headerStyle === "object" && column.headerStyle !== null) {
                columnProps.style = column.headerStyle;
            }
            //Add this column to the list of displayed columns
            renderProps.columns.push(columnProps);
        });
        //Add the table data
        if (this.state.sortedRows.length > 0) {
            for (let i = start; i < end; i++) {
                //Initialize the row props
                let rowIndex = this.state.sortedRows[i];
                let rowProps = {
                    "index": rowIndex,
                    "cells": [],
                    "style": null,
                    "className": null,
                    "selected": this.isRowSelected(rowIndex)
                };
                //Get the row data
                let row = this.props.data[rowProps.index];
                //Build the row cells content
                this.props.columns.forEach(function (column, index) {
                    //Check if this column is not visible
                    if (typeof column.visible === "boolean" && column.visible === false) {
                        return null;
                    }
                    //Initialize the cell props
                    let cellProps = {
                        "index": index,
                        "style": null,
                        "className": null,
                        "content": (typeof column.defaultValue === "string") ? column.defaultValue : ""
                    };
                    //Check for custom cell content
                    if (typeof column.render === "function") {
                        cellProps.content = column.render.call(null, row, rowProps.index);
                    }
                    else {
                        //No custom content, find the content in the row data
                        if (typeof column.key !== "undefined" && column.key !== null) {
                            if (typeof row[column.key] !== "undefined") {
                                cellProps.content = row[column.key];
                            }
                        }
                        //cellProps.content = (typeof column.key !== "undefined") ? row[column.key] : column.defaultValue;
                    }
                    //Check the custom cell class-name
                    if (typeof column.className === "string") {
                        cellProps.className = column.className;
                    }
                    //Check the custom cell style
                    if (typeof column.style === "object" && column.style !== null) {
                        cellProps.style = column.style;
                    }
                    //Save the cell information
                    rowProps.cells.push(cellProps);
                });
                ////Check if this row is highlighted
                //if (this.isRowHighlighted(this.state.sortedRows[i]) === true) {
                //    //Check for custom highlight class name
                //    if (typeof this.props.highlightClassName === "string") {
                //        rowProps.className = this.props.highlightClassName;
                //    }
                //    else {
                //        rowProps.className = "neutrine-datatable-row--highlighted";
                //    }
                //}
                //Check for custom row class name
                //if (typeof this.props.rowClassName === "function") {
                //    rowProps.className = this.props.rowClassName.call(null, row, rowProps.index);
                //}
                //Add custom row class
                rowProps.className = helpers.callProp(this.props.rowClassName, [row, rowProps.index, rowProps.selected]);
                //Add custom row style
                rowProps.style = helpers.callProp(this.props.rowStyle, [row, rowProps.index, rowProps.selected]);
                //Append this row data
                renderProps.data.push(rowProps);
            }
        }
        //Render the table
        return React.createElement(DataTableRender, renderProps);
    }
    //Render the datatable component
    render() {
        let self = this;
        //Check the number of columns to display
        if (this.props.columns.length === 0) {
            return this.renderEmpty();
        }
        //Calculate the rows start and end values
        let rowTotal = this.state.sortedRows.length;
        let rowStart = Math.max(0, this.state.page * this.state.pageSize);
        let rowEnd = Math.min(rowStart + this.state.pageSize, rowTotal);
        //Initialize the pagination props
        let paginationProps = { 
            "key": 1,
            "page": this.state.page, 
            "pages": this.state.pages, 
            "pageSize": this.state.pageSize, 
            "pageEntries": this.props.pageEntries,
            "onPageChange": self.handlePageChange,
            "onPageSizeChange": self.handlePageSizeChange,
            "rowStart": rowStart,
            "rowEnd": rowEnd,
            "rowTotal": rowTotal
        };
        //Check if pagination is visible
        let paginationRender = null;
        if (this.props.showPagination === true && this.props.usePagination === true) {
            paginationRender = React.createElement(DataTablePagination, paginationProps);
        }
        //Initialize the table props
        let tableProps = {
            "className": "neutrine-datatable-container",
            "style": null
        };
        //Check the height attribute
        if (this.props.usePagination === false && this.props.height !== null) {
            tableProps.style = {
                "height": this.props.height
            };
        }
        //Build the table element
        let table = React.createElement("div", tableProps, this.renderTable(rowStart, rowEnd));
        //Return the datatable element
        return React.createElement("div", {"className": "neutrine-datatable"}, table, paginationRender);
    }
}

//Table default props
DataTable.defaultProps = { 
    "columns": [], 
    "data": [],
    "reload": false,
    //Table style configuration
    "border": true, 
    "striped": false, 
    "hover": false,
    "height": null,
    //Table style customization
    "rowClassName": null,
    "rowStyle": null,
    "cellClassName": null,
    "cellStyle": null,
    //Highlighted rows
    "highlightedRows": [], //Highlighted rows
    "highlightClassName": null, //Custom highlight class-name
    "highlightStyle": null,     //Custom highlight style
    //Cell clicks listener
    "onBodyCellClick": null, //Body cell click event listener
    "onHeaderCellClick": null, //Header cell click event listener
    //Pagination
    "page": 0, //Initial page
    "pageSize": 10, //Number of rows for each page
    "pageEntries": [5, 10, 15], //Available rows for each page
    "usePagination": true, //Use pagination
    "showPagination": true, //Display pagination
    //Empty table configuration
    "emptyText": "No data to display", 
    //Selection
    "selectable": false,
    "onSelect": null,
    "selectedRows": null
};


