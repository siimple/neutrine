//Button class
export default class SiimpleBtn extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Set the state
    this.state = { color: null, disabled: false, text: null };

    //Parse the properties
    if(typeof this.props.color === 'string'){ this.state.color = this.props.color; }

    //Parse the disabled property
    if(typeof this.props.disabled === 'boolean'){ this.state.disabled = this.props.disabled; }

    //Parse the text property
    if(typeof this.props.text === 'string'){ this.state.text = this.props.text; }
  }

  //Render the button
  render(props, state)
  {
    //Save this
    var self = this;

    //Initialize the list of classes
    var list = [ 'siimple-btn' ];

    //Add the button color
    if(typeof this.state.color === 'string'){ list.push('siimple-btn--' + this.state.color); }

    //Add the button disabled option
    if(this.state.disabled === true){ list.push('siimple-btn--disabled'); }

    //Parse the text content
    var text = (typeof this.state.text === 'string') ? this.state.text.trim() : '';

    //Return the button element
    return React.createElement('div', { className: list.join(' '), onClick: self.props.onClick }, text);
  }
}
