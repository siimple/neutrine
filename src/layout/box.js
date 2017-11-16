import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

//Box layout class
export default class SiimpleBox extends SiimpleComponent
{
  //Render the box component
  render()
  {
    //Initialize the box class list
    var class_list = [ 'siimple-box' ];

    //Check the box color property
    if(typeof this.props.color === 'string' && colors.list.indexOf(this.props.color.toLowerCase()) !== -1)
    {
      //Add the box color
      class_list.push('siimple-box--' + this.props.color.toLowerCase());
    }

    //Initialize the box children list
    var children = [];

    //Check the title property
    if(typeof this.props.title === 'string')
    {
      //Add the title element
      children.push(h.div({ className: 'siimple-box-title' }, this.props.title));
    }

    //Check the subtitle property
    if(typeof this.props.subtitle === 'string')
    {
      //Add the subtitle element
      children.push(h.div({ className: 'siimple-box-subtitle' }, this.props.subtitle));
    }

    //Check the detail property
    if(typeof this.props.detail === 'string')
    {
      //Add the detail element
      children.push(h.div({ className: 'siimple-box-detail' }, this.props.detail));
    }

    //Return the box component
    return h.div({ className: class_list }, children, this.props.children);
  }
}

//Default props
SiimpleBox.defaultProps = { color: null, title: null, subtitle: null, detail: null };
