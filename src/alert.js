//Alert component
export default class SiimpleAlert extends React.Component
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the state object
    this.state = { color: null, text: null, closeBtn: false };

    //Parse the color property
    if(typeof this.props.color === 'string'){ this.state.color = this.props.color.trim(); }

    //Parse the text property
    if(typeof this.props.text === 'string'){ this.state.text = this.props.text.trim(); }

    //Parse the close button property
    if(typeof this.props.closeBtn === 'boolean'){ this.state.closeBtn = this.props.closeBtn; }
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

    //Initialize the constructor arguments
    var args = [ 'div', { className: className.join(' ') }];

    //Check the close button
    if(this.state.closeBtn === true)
    {
      //Append the close button div
      args.push(e('div', { className: 'siimple-close' }));
    }

    //Add the alert text
    args.push(e('span', {}, this.state.text));

    //Create the alert element
    return e.apply(null, args);
  }
}