import h from '../hyperscript.js';

//Heading class
export default class SiimpleHeading extends React.Component
{
  //Render the heading element
  render()
  {
    //Initialize the header class
    var class_name = null;

    //Check the header type
    if(typeof this.props.type === 'string' && this.props.type.charAt(0).toLowerCase() === 'h' && this.props.type.length === 2)
    {
      //Add the heading class
      class_name = 'siimple-' + this.props.type.toLowerCase().trim();
    }

    //Return the heading element
    return h.div({ className: class_name }, this.props.children);
  }
}

//Default heading props
SiimpleHeading.defaultProps = { type: 'h1' };
