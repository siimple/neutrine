import SiimpleComponent from '../index.js';
import h from '../hyperscript.js';

//Grid class
export class SiimpleGrid extends SiimpleComponent
{
  //Render method
  render()
  {
    //Return the grid element
    return h.div({ className: 'siimple-grid' }, this.props.children);
  }
}

//Grid row class
export class SiimpleGridRow extends SiimpleComponent
{
  //Render grid row
  render()
  {
    //Return the grid element
    return h.div({ className: 'siimple-grid-row' }, this.props.children);
  }
}
