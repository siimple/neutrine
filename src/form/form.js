import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Form component
export class SiimpleForm extends SiimpleComponent
{
  //Render a simple form element
  render()
  {
    //Return a form element
    return h.div({ className: 'siimple-form' }, this.props.children);
  }
}

//Form grup component
export class SiimpleFormGroup extends SiimpleComponent
{
  //Render the form group component
  render()
  {
    //Return a group component
    return h.div({ className: 'siimple-form-group' }, this.props.children);
  }
}

