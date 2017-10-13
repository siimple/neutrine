import el from './element.js';

//Heading class
export default class SiimpleHeading extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the state object
    this.state = { type: '1' };

    //Parse the initial properties
    this.componentWillReceiveProps(props);
  }

  //Parse new props
  componentWillReceiveProps(props)
  {
    //Parse the heading type value
    if(typeof props.type !== 'undefined' && props.type !== this.state.type)
    {
      //Save the heading type
      this.state.type = props.type;
    }
  }

  //Render the heading element
  render()
  {
    //Get the header class
    var class_name = (typeof this.state.type === 'string') ? 'siimple-h' + this.state.type.trim() : null;

    //Return the heading element
    return el.div({ className: class_name }, this.props.children);
  }
}