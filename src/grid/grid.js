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
    //Initialize the columns class list
    var class_list = [ 'siimple-grid-col' ];

    //Check the default size
    if(typeof this.props.size === 'number')
    {
      //Add the default column size
      class_list.push('siimple-grid-col--' + this.props.size);
    }

    //Check the large column size
    if(typeof this.props.large === 'number')
    {
      //Add the column size for large screens
      class_list.push('siimple-grid-col-lg--' + this.props.large);
    }

    //check the medium column size
    if(typeof this.props.medium === 'number')
    {
      //Add the column size for medium screens
      class_list.push('siimple-grid-col-md--' + this.props.medium);
    }

    //Check the small column size
    if(typeof this.props.small === 'number')
    {
      //Add the column size for small screens
      class_list.push('siimple-grid-col-sm--' + this.props.medium);
    }

    //Return the column element
    return h.div({ className: class_list }, this.props.children);
  }
}

//Column default props
SiimpleGridCol.defaultProps = { size: null, large: null, medium: null, small: null };
