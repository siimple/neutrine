//Tip class
export default class SiimpleTip extends React.Component
{
  //Available icons
  private available_icons = [ 'exclamation', 'question', 'hearth' ];

  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Set the state
    this.state = { color: null, icon: null };

    //Update props
    this.componentWillReceiveProps(props);
  }

  //Parse new props
  componentWillReceiveProps(props)
  {
    //Parse the color property
    if(typeof props.color !== 'undefined' && props.color !== this.state.color)
    {
      //Change the color state value
      this.state.color = props.color;
    }

    //Parse the icon property
    if(typeof props.icon !== 'undefined' && props.icon !== this.state.icon)
    {
      //Save the icon state value
      this.state.icon = props.icon;
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

    //Add the tip icon
    if(typeof this.state.icon === 'string')
    {
      //Check if this icon exists
      if(this.available_icons.indexOf(this.state.icon.toLowerCase().trim()) !== -1)
      {
        //Append the icon class
        class_list.push('siimple-tip--' + this.state.icon);
      }
    }

    //Return the element
    return el('div', { className: class_list.join(' ') }, this.props.children);
  }
}
