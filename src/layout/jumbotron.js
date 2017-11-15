import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

import sizes from './sizes.js';

//Jumbotron base component
export class SiimpleJumbotron extends SiimpleComponent
{
  //Render the jumbotron component
  render()
  {
    //Initialize the jumbotron class list
    var class_list = [ 'siimple-jumbotron' ];

    //Check the jumbotron color
    if(typeof this.props.color === 'string' && colors.list.indexOf(this.props.color.toLowerCase()) !== -1)
    {
      //Add the color class
      class_list.push('siimple-jumbotron--' + this.props.color.toLowerCase());
    }

    //Check the jumbotron size property
    if(typeof this.props.size === 'string' && sizes.indexOf(this.props.size.toLowerCase()) !== -1)
    {
      //Add the jumbotron size class
      class_list.push('siimple-jumbotron--' + this.props.size.toLowerCase());
    }
    
    //Return the parent div
    return h.div({ className: class_list, style: this.props.style }, this.props.children);
  }
}

//Jumbotron default props
SiimpleJumbotron.defaultProps = { color: null, size: null, style: {} };
