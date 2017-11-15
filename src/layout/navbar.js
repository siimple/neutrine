import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

//Navbar sizes
var navbar_sizes = ['small', 'large', 'fluid'];

//Navbar default class
export class SiimpleNavbar extends SiimpleComponent
{
  //Render the navbar element
  render()
  {
    //Save the props
    var props = this.props;

    //Initialize the class list
    var class_list = [ 'siimple-navbar' ];

    //Check the color
    if(typeof props.color === 'string' && colors.list.indexOf(props.color.toLowerCase()) !== -1)
    {
      //Add the color class
      class_list.push('siimple-navbar--' + props.color.toLowerCase());
    }

    //Check the size
    if(typeof props.size === 'string' && navbar_sizes.indexOf(props.size.toLowerCase()) !== -1)
    {
      //Add the size class
      class_list.push('siimple-navbar--' + props.size.toLowerCase());
    }

    //Render the navbar
    return h.div({ className: class_list }, props.children);
  }
}

//Navbar default props
SiimpleNavbar.defaultProps = { color: null, size: null };
