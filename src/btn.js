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

    //Parse the properties
    if(typeof this.props.color === 'string'){ this.state.color = this.props.color; }

    //Parse the disabled property
    if(typeof this.props.disabled === 'boolean'){ this.state.disabled = this.props.disabled; }
  }

  //Render the button
  render()
  {
    //Save this
    var self = this;

    //Create element alias
    var e = React.createElement;

    //Initialize the list of classes
    var list = [ 'siimple-btn' ];

    //Add the button color
    if(typeof this.state.color === 'string'){ list.push('siimple-btn--' + this.state.color); }

    //Add the button disabled option
    if(this.state.disabled === true){ list.push('siimple-btn--disabled'); }

    //Return the button element
    return e('div', { className: list.join(' '), onClick: self.props.onClick }, this.props.children);
  }
}
