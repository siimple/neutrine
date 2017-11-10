import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Form component
export class SiimpleForm extends SiimpleComponent
{
  //Render a simple form element
  render()
  {
    //Initialize the new list of childrens
    var children = [];

    //Check the title property
    if(typeof this.props.title === 'string')
    {
      //Append the title element
      children.push(h.div({ className: 'siimple-form-title' }, this.props.title));
    }

    //Check the detail property
    if(typeof this.props.detail === 'string')
    {
      //Append the detail element
      children.push(h.div({ className: 'siimple-form-detail' }, this.props.detail));
    }

    //Return a form element
    return h.div({ className: 'siimple-form' }, children, this.props.children);
  }
}

//Form default props
SiimpleForm.defaultProps = { title: null, detail: null };

//Form field default props
export class SiimpleFormField extends SiimpleComponent
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
      children.concat(this.props.children);
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
