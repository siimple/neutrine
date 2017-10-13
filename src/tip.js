//Tip class
export default class SiimpleTip extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Set the state
    this.state = { color: null };

    //Update props
    this.componentWillReceiveProps(props);
  }

  //Parse new props
  componentWillReceiveProps(props)
  {
    //Parse the color property
    if(typeof props.color === 'string' && props.color !== this.state.color)
    {
      this.state.color = props.color;
    }
  }

  //Render the tip element
  render()
  {
    //Create element alias
    var el = React.createElement;

    //Initialize the tip class list
    var class_list = [ 'siimple-tip' ];

    //Add the tip color
    if(typeof this.state.color === 'string')
    {
      //Append the color class
      class_list.push('siimple-tip--' + this.state.color);
    }

    //Return the element
    return el('div', { className: class_list.join(' ') }, this.props.children);
  }
}
