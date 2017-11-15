import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

//Footer sizes
var footer_sizes = ['small', 'large', 'fluid'];

//Footer layout component
export default class SiimpleFooter extends SiimpleComponent
{
  //Render the footer component
  render()
  {
    //Initialize the footer class list
    var class_list = [ 'siimple-footer' ];

    //Check the color
    if(typeof this.props.color === 'string' && colors.list.indexOf(this.props.color.toLowerCase()) !== -1)
    {
      //Add the color class
      class_list.push('siimple-footer--' + this.props.color.toLowerCase());
    }

    //Check the content size
    if(typeof this.props.size === 'string' && footer_sizes.indexOf(this.props.size.toLowerCase()) !== -1)
    {
      //Add the size class
      class_list.push('siimple-footer--' + this.props.size.toLowerCase());
    }

    //Render the footer div
    return h.div({ className: class_list }, this.props.children);
  }
}

//Default props
SiimpleFooter.defaultProps = { color: null, size: null };
