import { string } from 'kofi-utils';

import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Switch component
export default class SiimpleSwitch extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super method
    super(props);

    //Initialize the state
    this.state = { id: string.unique() };

    //Initialize the referenced elements object
    this.ref = {};

    //Bind handlers
    this.handleChange = this.handleChange.bind(this);
  }

  //Handle the switch change
  handleChange(e)
  {
    //Call the change listener
    this.props.onChange.call(null, e.nativeEvent, this.ref.input.checked);
  }

  //Get or set the switch state
  checked(is_checked)
  {
    //Check the is checked value
    if(typeof is_checked === 'boolean')
    {
      //Set the checked value
      this.ref.input.checked = is_checked;
    }
    else
    {
      //Return if checkbox is checked
      return this.ref.input.checked;
    }
  }

  //Render the switch element
  render()
  {
    //Save this
    var self = this;

    //Initialize the switch children
    var children = [];

    //Initialize the input element props
    var input_props = { type: 'checkbox', defaultChecked: this.props.checked, name: this.props.name };

    //Add the input reference
    input_props.ref = function(i){ self.ref.input = i; };

    //Add the input id
    input_props.id = this.state.id;

    //Add the on change listener
    if(typeof this.props.onChange === 'function'){ input_props.onChange = self.handleChange; }

    //Append the input
    children.push(h('input', input_props));

    //Append a label element
    children.push(h('label', { htmlFor: this.state.id }));

    //Append an empty div element
    children.push(h.div({}, null));

    //Return the switch element
    return h.div({ className: 'siimple-switch' }, children);
  }
}

//Switch default props
SiimpleSwitch.defaultProps = { name: null, checked: true, onChange: null };
