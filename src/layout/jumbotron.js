import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

import sizes from './sizes.js';

//Jumbotron base component
export default class SiimpleJumbotron extends SiimpleComponent
{
  //Render the jumbotron component
  render()
  {
    //Initialize the jumbotron class list
    var class_list = [ 'siimple-jumbotron' ];

    //Check the jumbotron color
    if(typeof this.props.color === 'string' && colors.list.indexOf(this.props.color.toLowerCase()) !== -1)
    {
      //Add the color class
      class_list.push('siimple-jumbotron--' + this.props.color.toLowerCase());
    }

    //Check the jumbotron size property
    if(typeof this.props.size === 'string' && sizes.indexOf(this.props.size.toLowerCase()) !== -1)
    {
      //Add the jumbotron size class
      class_list.push('siimple-jumbotron--' + this.props.size.toLowerCase());
    }

    //Initialize the jumbotron children array
    var children = [];

    //Check the title property
    if(typeof this.props.title === 'string')
    {
      //Add the title element
      children.push(h.div({ className: 'siimple-jumbotron-title' }, this.props.title));
    }

    //Check the subtitle property
    if(typeof this.props.subtitle === 'string')
    {
      //Add the subtitle element
      children.push(h.div({ className: 'siimple-jumbotron-subtitle' }, this.props.title));
    }

    //Check the detail property
    if(typeof this.props.detail === 'string')
    {
      //Add the detail element
      children.push(h.div({ className: 'siimple-jumbotron-detail' }, this.props.detail));
    }

    //Return the parent div
    return h.div({ className: class_list, style: this.props.style }, children, this.props.children);
  }
}

//Jumbotron default props
SiimpleJumbotron.defaultProps = { color: null, size: null, style: {}, title: null, subtitle: null, detail: null };
