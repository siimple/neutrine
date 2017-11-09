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

//Form rule component
export class SiimpleFormRule extends SiimpleComponent
{
  //Render the form rule element
  render()
  {
    //Return a rule elemenet
    return h.div({ className: 'siimple-form-rule' });
  }
}

