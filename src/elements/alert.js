import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';
import SiimpleClose from './close.js';

//Alert component
export default class SiimpleAlert extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Bind the handle close method
    this.handleClose = this.handleClose.bind(this);
  }

  //Handle close button event
  handleClose(e)
  {
    //Display in logs
    console.log('Close button clicked');
  }

  //Render the alert component
  render()
  {
    //Initialize the list with the element classes
    var class_list = [ 'siimple-alert' ];

    //Check the color
    if(typeof this.props.color === 'string')
    {
      //Add the alert color
      class_list.push('siimple-alert--'  + this.props.color.toLowerCase().trim());
    }

    //Initialize the child elements list
    var children = [ h.span({}, this.props.children) ];

    //Check if the close button is enabled
    if(this.props.closeButton === true)
    {
      //Add the close button element
      children.push(h(SiimpleClose, { onClick: this.handleClose }));
    }

    //Create the alert element
    return h.div({ className: class_list.join(' ') }, children);
  }
}

//Alert default props
SiimpleAlert.defaultProps = { color: 'blue', closeButton: false };
