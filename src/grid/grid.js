import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Grid class
export class SiimpleGrid extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-grid', style: this.props.style}, this.props.children);
    }
}

//Grid default props
SiimpleGrid.defaultProps = { style: null };

//Grid row class
export class SiimpleGridRow extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-grid-row', style: this.props.style}, this.props.children);
    }
}

//Grid row default props
SiimpleGridRow.defaultProps = { style: null };

//Grid column class
export class SiimpleGridCol extends SiimpleComponent {
    render() {
        var class_list = ['siimple-grid-col'];

        //Check the column size
        if (typeof this.props.size === 'number') {
            class_list.push('siimple-grid-col--' + this.props.size);
        }
        if (typeof this.props.large === 'number') {
            class_list.push('siimple-grid-col-lg--' + this.props.large);
        }
        if (typeof this.props.medium === 'number') {
            class_list.push('siimple-grid-col-md--' + this.props.medium);
        }
        if (typeof this.props.small === 'number') {
            class_list.push('siimple-grid-col-sm--' + this.props.medium);
        }

        return h('div', {className: class_list, style: this.props.style}, this.props.children);
    }
}

//Column default props
SiimpleGridCol.defaultProps = {size: null, large: null, medium: null, small: null, style: null};
