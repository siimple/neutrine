//Alert component
export default class SiimpleAlert extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the state object
    this.state = { color: null, closeBtn: false };

    //Parse the color property
    if(typeof this.props.color === 'string')
    {
      //Save the alert color value
      this.state.color = this.props.color.trim();
    }

    //Parse the close button property
    if(typeof this.props.closeBtn === 'boolean')
    {
      //Save the alert close button visibility value
      this.state.closeBtn = this.props.closeBtn;
    }
  }

  //Render the alert component
  render()
  {
    //Save this
    var self = this;

    //Create element alias
    var e = React.createElement;

    //Initialize the class names
    var className = [ 'siimple-alert' ];

    //Check the color
    if(typeof this.state.color === 'string')
    {
      //Add the alert color
      className.push('siimple-alert--'  + this.state.color);
    }

    //Initialize the child elements list
    var children = [ e('span', { key: 0 }, this.props.children) ];

    //Check the close button
    if(this.state.closeBtn === true)
    {
      //Append the close button div
      children.push(e('div', { className: 'siimple-close', key: 1 }));
    }

    //Create the alert element
    return e('div', { className: className.join(' ') }, children);
  }
}