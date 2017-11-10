import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Label component
export default class SiimpleLabel extends SiimpleComponent
{
  //Render the label element
  render()
  {
    //Return the label element
    return h('label', { className: 'siimple-label' }, this.props.text);
  }
}

//Label default props
SiimpleLabel.defaultProps = { text: '' };
