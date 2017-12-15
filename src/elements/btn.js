import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Button class
export default class SiimpleBtn extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Bind the handle click method
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle click method
  handleClick(e)
  {
    //Check if the onclick property is defined and is a function
    if(typeof this.props.onClick === 'function')
    {
      //Call the onclick method
      return this.props.onClick.call(null, e);
    }
  }

  //Render the button
  render()
  {
    //Save this
    var self = this;

    //Initialize the button props
    var btn_props = { onClick: self.handleClick, style: this.props.style };

    //Initialize the list of classes
    btn_props.className = [ 'siimple-btn' ];

    //Add the button color
    if(typeof this.props.color === 'string')
    {
      //Add button color class
      btn_props.className.push('siimple-btn--' + this.props.color.toLowerCase().trim());
    }

    //Add the button disabled option
    if(this.props.disabled === true)
    {
      //Add button disabled class
      btn_props.className.push('siimple-btn--disabled');
    }

    //Return the button element
    return h('div', btn_props, this.props.children);
  }
}

//Default properties values
SiimpleBtn.defaultProps = { color: 'blue', disabled: false, onClick: null, style: null };
