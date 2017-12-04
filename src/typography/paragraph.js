import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Paragraph component
export default class SiimpleParagraph extends SiimpleComponent
{
  //Render the paragraph component
  render()
  {
    //Return a div with the paragraph class
    return h.div({ className: 'siimple-paragraph' }, this.props.children);
  }
}
