//Button class
export default class SiimpleBtn extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Set the state
    this.state = { color: null, disabled: false };

    //Parse props
    this.componentWillReceiveProps(props);
  }

  //Parse new props
  componentWillReceiveProps(props)
  {
    //Parse the properties
    if(typeof props.color !== 'undefined' && props.color !== this.state.color)
    {
      //Save the button color
      this.state.color = props.color;
    }

    //Parse the disabled property
    if(typeof props.disabled === 'boolean' && props.disabled !== this.state.disabled)
    {
      //Save the disabled option
      this.state.disabled = props.disabled;
    }
  }

  //Render the button
  render()
  {
    //Save this
    var self = this;

    //Create element alias
    var e = React.createElement;

    //Initialize the list of classes
    var class_list = [ 'siimple-btn' ];

    //Add the button color
    if(typeof this.state.color === 'string')
    {
      //Add button color class
      class_list.push('siimple-btn--' + this.state.color.toLowerCase().trim());
    }

    //Add the button disabled option
    if(this.state.disabled === true)
    {
      //Add button disabled class
      class_list.push('siimple-btn--disabled');
    }

    //Return the button element
    return e('div', { className: class_list.join(' '), onClick: self.props.onClick }, this.props.children);
  }
}
