import h from '../hyperscript.js';
import colors from '../colors.js';
import SiimpleComponent from '../index.js';

//Export tabs component
export default class SiimpleTabs extends SiimpleComponent
{
  //Constructor
  constructor(props)
  {
    //Call super
    super(props);

    //Initialize the state with the selected tab
    this.state = { selected: 0 };

    //Bind handlers
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle click event
  handleClick(e)
  {
    //Check the on click listener
    if(typeof this.props.onClick !== 'function'){ return; }

    //Get the native event object
    var event = e.nativeEvent;

    //Find the node -> Remove the html, document and window paths
    for(var i = 0; i < event.path.length - 3; i++)
    {
      //Get the node element
      var node = event.path[i];

      //Check for tab class
      if(node.classList.contains('siimple-tabs-tab') === true)
      {
        //Check for null dataset
        if(node.dataset === null){ return; }

        //Get the tab index
        var index = parseInt(node.dataset.index);

        //Emit the on click event
        return this.props.onClick(event, index);
      }
    }
  }

  //Select a tab
  select(index)
  {
    //Change the state
    this.setState({ selected: index });
  }

  //Render the tabs element
  render()
  {
    //Save this
    var self = this;

    //Initialize the tabs properties
    var tabs_props = { className: [ 'siimple-tabs' ] };

    //Check the boxed attribute
    if(this.props.boxed === true)
    {
      //Add the boxed class name
      tabs_props.className.push('siimple-tabs--boxed');
    }

    //Add the color tab
    if(typeof this.props.color === 'string' && colors.list.indexOf(this.props.color) !== -1)
    {
      //Add the colored tab class
      tabs_props.className.push('siimple-tabs--' + this.props.color);
    }

    //Initialize the children list
    var tabs_children = [];

    //For each tab in the list
    this.props.tabs.forEach(function(item, index)
    {
      //Initialize the tab properties
      var tab_props = { className: [ 'siimple-tabs-tab' ], onClick: self.handleClick };

      //Add the dataset object
      tab_props.dataset = { index: index };

      //Check if this tab is selected
      if(self.state.selected === index)
      {
        //Add the selected class
        tab_props.className.push('siimple-tabs-tab--selected');
      }

      //Append the tab element
      tabs_children.push(h('div', tab_props, item));
    });

    //Return the tabs element
    return h('div', tabs_props, tabs_children);
  }
}

//Tabs default props
SiimpleTabs.defaultProps = { tabs: [], boxed: true, color: 'navy', onClick: null };
