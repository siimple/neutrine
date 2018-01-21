import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Export main table component
export class SiimpleTable extends SiimpleComponent {
    render() {
        let classList = ['siimple-table'];

        if (this.props.striped === true) {
            classList.push('siimple-table--striped');
        }
        if (this.props.border === true) {
            classList.push('siimple-table--border');
        }
        if (this.props.hover === true) {
            classList.push('siimple-table--hover');
        }

        return h('div', {className: classList, style: this.props.style}, this.props.children);
    }
}

//Table default properties
SiimpleTable.defaultProps = {style: null, striped: false, border: false, hover: false};

//Export table header component
export class SiimpleTableHeader extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-table-header', style: this.props.style}, this.props.children);
    }
}

//Table header default props
SiimpleTableHeader.defaultProps = {style: null};

//Export table body component
export class SiimpleTableBody extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-table-body', style: this.props.style}, this.props.children);
    }
}

//Table body default props
SiimpleTableBody.defaultProps = {style: null};

//Export table row component
export class SiimpleTableRow extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-table-row', style: this.props.style}, this.props.children);
    }
}

//Table row default props
SiimpleTableRow.defaultProps = {style: null};

//Export table cell component
export class SiimpleTableCell extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-table-cell', style: this.props.style}, this.props.children);
    }
}

//Table cell default props
SiimpleTableCell.defaultProps = {style: null};
