import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Form field component
export default class SiimpleFormField extends SiimpleComponent
{
  //Render the form field element
  render()
  {
    //Initialize the form field children
    var children = [];

    //Check the label prop
    if(typeof this.props.label === 'string')
    {
      //Append the label text
      children.push(h.div({ className: 'siimple-form-field-label' }, this.props.label));
    }

    //Append the children
    if(typeof this.props.children !== 'undefined')
    {
      //Append the children array
      children = children.concat(this.props.children);
    }

    //Check the helper prop
    if(typeof this.props.helper === 'string')
    {
      //Append the helper text
      children.push(h.div({ className: 'siimple-form-field-helper' }, this.props.helper));
    }

    //Render the field element
    return h.div({ className: 'siimple-form-field' }, children);
  }
}

//Form field default props
SiimpleFormField.defaultProps = { label: null, helper: null };
