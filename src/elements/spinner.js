import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Spinner class
export default class SiimpleSpinner extends SiimpleComponent
{
  //Render the spinner element
  render()
  {
    //Initialize the spinner class
    var class_list = [ 'siimple-spinner' ];

    //Check the color attribute
    if(typeof this.props.color === 'string')
    {
      //Add the color class
      class_list.push('siimple-spinner--' + this.props.color);
    }

    //Check the size attribute
    if(typeof this.props.size === 'string')
    {
      //Add the size class
      class_list.push('siimple-spinner--' + this.props.size);
    }

    //Return the element
    return h('div', { className: class_list, style: this.props.style }, null);
  }
}

//Spinner default props
SiimpleSpinner.defaultProps = { color: 'blue', size: null, style: null };
