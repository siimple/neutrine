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
    //Return the row element
    return h.div({ className: 'siimple-grid-row' }, this.props.children);
  }
}

//Grid column class
export class SiimpleGridCol extends SiimpleComponent
{
  //Render the grid column
  render()
  {
    //Save this
    var self = this;

    //Initialize the columns class list
    var class_list = [ 'siimple-grid-col' ];

    //Check the sizes property
    if(typeof this.props.sizes === 'object' && this.props.sizes !== null)
    {
      //Parse all the keys
      Object.keys(this.props.sizes).forEach(function(key)
      {
        //Check the kwy
        if(['default', 'sm', 'md', 'lg' ].indexOf(key) === -1){ return; }

        //Check for default key
        if(key === 'default')
        {
          //Add the default column size
          class_list.push('siimple-grid-col--' + self.props.sizes.default);
        }
        else
        {
          //Add the column size
          class_list.push('siimple-grid-col-' + key + '--' + self.props.sizes[key]);
        }
      });
    }

    //Return the column element
    return h.div({ className: class_list.join(' ') }, this.props.children);
  }
}

//Column default props
SiimpleGridCol.defaultProps = { sizes: {} };
