import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';
import SiimpleClose from './close.js';

//Alert component
export default class SiimpleAlert extends SiimpleComponent
{
  //Render the alert component
  render()
  {
    //Save this
    var self = this;

    //Initialize the list with the element classes
    var class_list = [ 'siimple-alert' ];

    //Check the color
    if(typeof this.props.color === 'string')
    {
      //Add the alert color
      class_list.push('siimple-alert--'  + this.props.color.toLowerCase().trim());
    }

    //Initialize the child elements list
    var children = [ h('span', {}, this.props.children) ];

    //Check if the close button is enabled
    if(this.props.showClose === true)
    {
      //Add the close button element
      children.push(h(SiimpleClose, { onClick: self.props.onCloseClick }));
    }

    //Create the alert element
    return h('div', { className: class_list, style: this.props.style }, children);
  }
}

//Alert default props
SiimpleAlert.defaultProps = { color: 'blue', showClose: false, onCloseClick: null, style: null };
