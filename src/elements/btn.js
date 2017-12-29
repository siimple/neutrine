import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Button class
export default class SiimpleBtn extends SiimpleComponent
{
  //Render the button
  render()
  {
    //Save this
    var self = this;

    //Initialize the button props
    var btn_props = { onClick: self.props.onClick, style: {} };

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

    //Check the fluid property
    if(this.props.fluid === true)
    {
      //Change the button style
      btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
    }

    //Check the custom styles
    if(typeof this.props.style === 'object' && this.props.style !== null)
    {
      //Assign the new styles
      btn_props.style = Object.assign(btn_props, this.props.style);
    }

    //Return the button element
    return h('div', btn_props, this.props.children);
  }
}

//Default properties values
SiimpleBtn.defaultProps = { color: 'blue', disabled: false, onClick: null, style: null, fluid: false };
