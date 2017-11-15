import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

import sizes from './sizes.js';

//Content layout component
export default class SiimpleContent extends SiimpleComponent
{
  //Render the content component
  render()
  {
    //Initialize the content class list
    var class_list = [ 'siimple-content' ];

    //Check the content size
    if(typeof this.props.size === 'string' && sizes.indexOf(this.props.size.toLowerCase()) !== -1)
    {
      //Add the size class
      class_list.push('siimple-content--' + this.props.size.toLowerCase());
    }

    //Render the content div
    return h.div({ className: class_list, style: this.props.style }, this.props.children);
  }
}

//Default props
SiimpleContent.defaultProps = { size: null, style: {} };
