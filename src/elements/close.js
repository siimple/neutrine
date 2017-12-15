import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Close button class
export default class SiimpleClose extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call the super constructor
    super(props);

    //Bind the handle click method
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle click method
  handleClick(e)
  {
    //Check if the onclick prop is defined
    if(typeof this.props.onClick === 'function')
    {
      //Call the onclick method
      return this.props.onClick.call(null, e);
    }
  }

  //Render the close button component
  render()
  {
    //Render the close button
    return h.div({ className: 'siimple-close', onClick: this.handleClick }, null);
  }
}

//Default props
SiimpleClose.defaultProps = { style: null, onClick: null };
