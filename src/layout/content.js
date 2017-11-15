import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Content sizes
var content_sizes = ['small', 'large', 'fluid'];

//Content layout component
export default class SiimpleContent extends SiimpleComponent
{
  //Render the content component
  render()
  {
    //Initialize the content class list
    var class_list = [ 'siimple-content' ];

    //Check the content size
    if(typeof this.props.size === 'string' && content_sizes.indexOf(this.props.size.toLowerCase()) !== -1)
    {
      //Add the size class
      class_list.push('siimple-content--' + this.props.size.toLowerCase());
    }
    
    //Render the content div
    return h.div({ className: class_list }, this.props.children);
  }
}

//Default props
SiimpleContent.defaultProps = { size: null };
