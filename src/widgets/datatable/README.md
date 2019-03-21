## Neutrine.DataTable


### Columns

The `columns` prop is an array of objects containing the following properties:

```js
let columns = [{
    "title": "",            //<string> Displayed column title
    "key": null,            //<string|null> key to access the column content in the row data object
    "defaultValue": "",     //<string> Default displayed value
    "sortable": false,      //<boolean> Column is sortable
    "visible": true,        //<boolean> Column is visible
    "className": "",        //<string|null> Custom class-name for the cell element of the column
    "style": null,          //<object|null> Custom style for the cell element of the column
    "headerClassName": "",  //<string|null> Custom class-name for the header cell
    "headerStyle": null,    //<object|null>Custom style for the header cell
    "minWidth": null,       //<string|number|null> Custom min-width for this column
    "width": null,          //<string|number|null> Custom width of this column
    "render": null          //<function|null> Function to customize the displaed content of the column
}];
```

