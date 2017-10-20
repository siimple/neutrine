//Spinner class
export default class SiimpleSpinner extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the spinner state
    this.state = { color: 'blue', size: null };

    //Check the color property
    if(typeof this.props.color === 'string')
    {
      //Set the color attribute
      this.state.color = this.props.color;
    }

    //Check the size property
    if(typeof this.props.size === 'string')
    {
      //Set the size attribute
      this.state.size = this.props.size;
    }
  }

  //Render the spinner element
  render()
  {
    //Initialize the spinner class
    var class_list = [ 'siimple-spinner' ];

    //Check the color attribute
    if(typeof this.state.color === 'string')
    {
      //Add the color class
      class_list.push('siimple-spinner--' + this.state.color);
    }

    //Check the size attribute
    if(typeof this.state.size === 'string')
    {
      //Add the size class
      class_list.push('siimple-spinner--' + this.state.size);
    }

    //Return the element
    return React.createElement('div', { className: class_list.join(' ') }, null);
  }
}
