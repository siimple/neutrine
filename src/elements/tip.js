import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Tip class
export default class SiimpleTip extends SiimpleComponent
{
  //Render the tip element
  render()
  {
    //Initialize the tip class list
    var class_list = [ 'siimple-tip' ];

    //Initialize the available icons
    var icons = [ 'exclamation', 'question', 'hearth' ];

    //Add the tip color
    if(typeof this.props.color === 'string')
    {
      //Append the color class
      class_list.push('siimple-tip--' + this.props.color.toLowerCase().trim());
    }

    //Add the tip icon
    if(typeof this.props.icon === 'string')
    {
      //Parse the icon value
      var icon_value = this.props.icon.toLowerCase().trim();

      //Check if this icon exists
      if(icons.indexOf(icon_value) !== -1)
      {
        //Append the icon class
        class_list.push('siimple-tip--' + icon_value);
      }
    }

    //Return the element
    return h.div({ className: class_list }, this.props.children);
  }
}

//Initialize the tip element default props
SiimpleTip.defaultProps = { color: 'blue', icon: null };
