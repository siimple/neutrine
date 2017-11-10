import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Select element
export default class SiimpleSelect extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super method
    super(props);

    //Initialize the referenced elements object
    this.ref = { select: null };

    //Bind methods
    this.handleChange = this.handleChange.bind(this);
  }

  //Handle select change
  handleChange(e)
  {
    //Call the change listener
    this.props.onChange.call(null, e.nativeEvent);
  }

  //Render the element
  render()
  {
    //Save this
    var self = this;

    //Initialize the select props
    var select_props = { className: [ 'siimple-select' ] };

    //Check the disabled property
    if(typeof this.props.disabled === true)
    {
      //Add the disabled class
      select_props.className.push('siimple-select--disabled');
    }

    //Check the fluid property
    if(typeof this.props.fluid === true)
    {
      //Add the fluid class
      select_props.className.push('siimple-select--fluid');
    }

    //Check the default value
    if(typeof this.props.value === 'string'){ select_props.defaultValue = this.props.value; }

    //Initialize the select children
    var select_children = [];

    //Parse all the provided options
    this.props.options.forEach(function(opt)
    {
      //Register the option
      select_children.push(h('option', { value: opt.value }, opt.name));
    });

    //Return the select element
    return h('select', select_props, select_children);
  }
}

//Select element default props
SiimpleSelect.defaultProps = { name: null, options: [], value: null, onChange: null, disabled: false, fluid: false };
