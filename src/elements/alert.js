import h from '../hyperscript.js';

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

    //Parse the properties
    this.componentWillReceiveProps(props);
  }

  //Parse new properties
  componentWillReceiveProps(props)
  {
    //Parse the color property
    if(typeof props.color !== 'undefined' && props.color !== this.state.color)
    {
      //Save the alert color value
      this.state.color = props.color;
    }

    //Parse the close button property
    if(typeof props.closeBtn === 'boolean' && props.closeBtn !== this.state.closeBtn)
    {
      //Save the alert close button visibility value
      this.state.closeBtn = props.closeBtn;
    }
  }

  //Render the alert component
  render()
  {
    //Initialize the list with the element classes
    var class_list = [ 'siimple-alert' ];

    //Check the color
    if(typeof this.state.color === 'string')
    {
      //Add the alert color
      class_list.push('siimple-alert--'  + this.state.color.toLowerCase().trim());
    }

    //Initialize the blose button properties
    var close_props = { className: 'siimple-close', style: null };

    //Check if the close button is enabled
    if(this.state.closeBtn === false){ close_props.style = { display: 'none' }; }

    //Initialize the child elements list
    var children = [ h.span({}, this.props.children), h.div(close_props, null) ];

    //Create the alert element
    return h.div({ className: class_list.join(' ') }, children);
  }
}