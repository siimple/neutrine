import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

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

  //Initialize the input types list
  static types = ['text', 'password', 'email', 'date'];

  //Handle the input change event
  handleChange(e)
  {
    //Check the change listener
    if(typeof this.props.onChange !== 'function'){ return; }

    //Call the change listener
    this.props.onChange.call(null, e.nativeEvent);
  }

  //Handle the input key press event
  handleKeyUp(e)
  {
    //Check the key up listener
    if(typeof this.props.onKeyUp !== 'function'){ return; }

    //Call the key up listener
    this.props.onKeyUp.call(null, e.nativeEvent);
  }

  //Get the current value
  value()
  {
    //Return the input current value
    return this.ref.input.value;
  }

  //Render the input element
  render()
  {
    //Save this
    var self = this;

    //Input props
    var input_props = { type: 'text', onChange: self.handleChange, onKeyUp: self.handleKeyUp };

    //Initialize the input class list
    input_props.className = [ 'siimple-input' ];

    //Add the input type
    if(this.types.indexOf(this.props.type.toLowerCase()) !== -1)
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

    //Check the name attribute
    if(typeof this.props.name === 'string'){ input_props.name = this.props.name; }

    //Check the value attribute
    if(typeof this.props.value === 'string'){ input_props.value = this.props.value; }

    //Return the input element
    return h('input', input_props, null);
  }
}

//Input default props
SiimpleInput.defaultProps = { type: 'text', placeholder: '', value: null, fluid: false, disabled: false };
SiimpleInput.defaultProps.onChange = null; //Change listener
SiimpleInput.defaultProps.onKeyUp = null; //Key press listener
