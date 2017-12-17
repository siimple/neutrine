import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Initialize the input types list
var inputTypes = ['text', 'password', 'email', 'date', 'number'];

//Input component
export default class SiimpleInput extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the reference object
    this.ref = { input: null };

    //Bind handler methods
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  //Handle the input change event
  handleChange(e)
  {
    //Call the change listener
    this.props.onChange.call(null, e.nativeEvent, this.value());
  }

  //Handle the input key press event
  handleKeyUp(e)
  {
    //Call the key up listener
    this.props.onKeyUp.call(null, e.nativeEvent);
  }

  //Get or set the current value
  value(val)
  {
    //Check the provided value
    if(typeof val !== 'undefined')
    {
      //Set the current value
      this.ref.input.value = val;
    }
    else
    {
      //Return the input current value
      return this.ref.input.value;
    }
  }

  //Render the input element
  render()
  {
    //Save this
    var self = this;

    //Input props
    var input_props = { type: 'text', name: this.props.name, style: this.props.style };

    //Initialize the input class list
    input_props.className = [ 'siimple-input' ];

    //Add the input type
    if(inputTypes.indexOf(this.props.type.toLowerCase()) !== -1)
    {
      //Save the input type
      input_props.type = this.props.type.toLowerCase();
    }

    //Add the reference function
    input_props.ref = function(i){ self.ref.input = i; };

    //Check the fluid property
    if(this.props.fluid === true)
    {
      //Add the fluid style
      input_props.className.push('siimple-input--fluid');
    }

    //Check the disabled property
    if(this.props.disabled === true)
    {
      //Add the disabled style
      input_props.className.push('siimple-input--disabled');
    }

    //Check the placeholder
    if(typeof this.props.placeholder === 'string')
    {
      //Add the placeholder attribute
      input_props.placeholder = this.props.placeholder;
    }

    //Check the on change listener
    if(typeof this.props.onChange === 'function'){ input_props.onChange = self.handleChange; }

    //Check the on key up listener
    if(typeof this.props.onKeyUp === 'function'){ input_props.onKeyUp = self.handleKeyUp; }

    //Check the name attribute
    if(typeof this.props.name === 'string'){ input_props.name = this.props.name; }

    //Check the value attribute
    if(typeof this.props.value === 'string'){ input_props.defaultValue = this.props.value; }

    //Check the input type
    if(this.props.type === 'number')
    {
      //Check the max attribute
      if(typeof this.props.max === 'string' || typeof this.props.max === 'number')
      {
        //Add the max value
        input_props.max = this.props.max.toString();
      }

      //Check the min attribute
      if(typeof this.props.min === 'string' || typeof this.props.min === 'number')
      {
        //Add the min value
        input_props.min = this.props.min.toString();
      }
    }

    //Return the input element
    return h('input', input_props);
  }
}

//Input default props
SiimpleInput.defaultProps = { type: 'text', placeholder: '', value: null, fluid: false, disabled: false, style: null };
SiimpleInput.defaultProps.onChange = null; //Change listener
SiimpleInput.defaultProps.onKeyUp = null; //Key press listener
SiimpleInput.defaultProps.max = null; //Max value for input type number
SiimpleInput.defaultProps.min = null; //Min value for input type number
