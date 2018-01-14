import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Breadcrumb parent component
export class SiimpleBreadcrumb extends SiimpleComponent
{
  render()
  {
    //Return the breadcrumb parent
    return h('div', { className: 'siimple-breadcrumb', style: this.props.style }, this.props.children);
  }
}

//Breadcrumb default props
SiimpleBreadcrumb.defaultProps = { style: null };

//Breadcrumb crumb component
export class SiimpleBreadcrumbCrumb extends SiimpleComponent
{
  render()
  {
    //Return the breadcrumb item
    return h('div', { className: 'siimple-breadcrumb-crumb', style: this.props.style }, this.props.children);
  }
}

//Breadcrumb crumb default props
SiimpleBreadcrumbCrumb.defaultProps = { style: null };
