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

//Navbar title element
export class SiimpleNavbarTitle extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call the super method
    super(props);

    //Bind the handle click
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle the title click event
  handleClick(e)
  {
    //Check the onclick listener
    if(typeof this.props.onClick === 'function')
    {
      //Call the onclick listener
      this.props.onClick.call(null, e);
    }
  }

  //Render the navbar title element
  render()
  {
    //Initialize the title element props
    var props = { className: 'siimple-navbar-title', style: { align: 'left' }, onClick: this.handleClick };

    //Render the navbar title
    return h.div(props, this.props.children);
  }
}

//Navbar title default props
SiimpleNavbarTitle.defaultProps = { onClick: null };
