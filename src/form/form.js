import h from '../hyperscript.js';
import SiimpleComponent from '../index.js';

//Form component
export class SiimpleForm extends SiimpleComponent
{
  //Render a simple form element
  render()
  {
    //Initialize the new list of childrens
    var children = [];

    //Check the title property
    if(typeof this.props.title === 'string')
    {
      //Append the title element
      children.push(h.div({ className: 'siimple-form-title' }, this.props.title));
    }

    //Check the detail property
    if(typeof this.props.detail === 'string')
    {
      //Append the detail element
      children.push(h.div({ className: 'siimple-form-detail' }, this.props.detail));
    }

    //Return a form element
    return h.div({ className: 'siimple-form' }, children, this.props.children);
  }
}

//Form default props
SiimpleForm.defaultProps = { title: null, detail: null };
