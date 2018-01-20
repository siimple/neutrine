import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Menu component
export class SiimpleMenu extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-menu', style: this.props.style}, this.props.children);
    }
}

//Main menu props
SiimpleMenu.defaultProps = {style: null};

//Menu group component
export class SiimpleMenuGroup extends SiimpleComponent {
    render() {
        return h('div', {className: 'siimple-menu-group', style: this.props.style}, this.props.children);
    }
}

//Menu group default props
SiimpleMenuGroup.defaultProps = {style: null};

//Menu item
export class SiimpleMenuItem extends SiimpleComponent {
    render() {
        let classList = ['siimple-menu-item'];
        if (this.props.selected === true) {
            classList.push('siimple-menu-item--selected');
        }
        return h('div', {className: classList, style: this.props.style}, this.props.children);
    }
}

//Menu item default props
SiimpleMenuItem.defaultProps = {style: null};
