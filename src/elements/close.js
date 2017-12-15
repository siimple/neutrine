import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Close button class
export default class SiimpleClose extends SiimpleComponent
{
  //Render the close button component
  render()
  {
    //Save this
    var self = this;

    //Initialize the class list
    var class_list = [ 'siimple-close' ];

    //Render the close button
    return h('div', { className: class_list, onClick: self.props.onClick, style: self.props.style });
  }
}

//Default props
SiimpleClose.defaultProps = { size: null, style: null, onClick: null };
