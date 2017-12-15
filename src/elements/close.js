import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Close button class
export default class SiimpleClose extends SiimpleComponent
{
  //Render the close button component
  render()
  {
    //Save this
    var self = this;

    //Render the close button
    return h('div', { className: 'siimple-close', onClick: self.props.onClick, style: self.props.style });
  }
}

//Default props
SiimpleClose.defaultProps = { style: null, onClick: null };
