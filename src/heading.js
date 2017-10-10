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

    //Parse the heading type value
    if(typeof this.props.type === 'string')
    {
      //Save the heading type
      this.state.type = this.props.type;
    }
  }

  //Render the heading element
  render()
  {
    //Return the heading element
    return React.createElement('div', { className: 'siimple-h' + this.state.type }, this.props.children);
  }
}