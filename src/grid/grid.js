import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Grid class
export default class SiimpleGrid extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super
    super();
  }

  //Render method
  render()
  {
    //Return the grid element
    return h.div({ className: 'siimple-grid' }, this.props.children);
  }
}