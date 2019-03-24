//Import dependencies
import React from "react";

//Import toolbar styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-toolbar";

//Export layout toolbar component
export class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        //Initialize the toolbar status
        this.state = {
            "collapsed": true
        };
    }
    //Render the toolbar container component
    renderContainer() {
        let self = this;
        //Initialize the container props
        let containerProps = {
            "className": baseClass + "-container"
        };
        //Return the sidebar element
        return React.createElement("div", containerProps, this.renderItems(), this.renderToggle());
    }
    //Render the toolbar items
    renderItems() {
        let self = this;
        //Build all groups links
        let groups = this.props.groups.map(function (group, groupIndex) { 
            //Build the group title element
            let title = React.createElement("div", {"className": baseClass + "-group"}, group);
            //Build the group items list
            let items = [];
            self.props.items.forEach(function (item, index) {
                //Check if this item is not on this group
                if (typeof item.group !== "string" || item.group !== group) {
                    return null;
                }
                //Initialize the item props
                let props = {
                    "className": [baseClass + "-link"],
                    "onClick": function () {
                        if (typeof self.props.onClick === "function") {
                            return self.props.onCLick(item, index);
                        }
                    },
                    "key": index
                };
                //Check if this item is active
                if (key === self.props.current) {
                    props.className.push(baseClass + "-link--active");
                }
                //Check for custom item classname
                if (typeof item.className === "string") {
                    props.className.push(item.className);
                }
                //Check for custom item icon
                if (typeof item.icon === "string") {
                    props.style = {
                        "backgroundImage": "url('" + item.icon + "')"
                    };
                }
                //Join the classnames
                props.className = props.className.join(" ");
                //Save the button component
                items.push(React.createElement("div", props, item["title"])); 
            });
            //Return the group parent
            return React.createElement(React.Fragment, {"key": groupIndex}, title, items);
        });
        //Return all items
        return React.createElement(React.Fragment, {}, groups);
    }
    //Render the toolbar toggle button
    renderToggle() {
        let self = this;
        //Initialize the toggle button props
        let toggleProps = {
            "className": baseClass + "-toggle",
            "onClick": function (event) {
                //console.log("toggle clicked");
                //Get the current collapsed value
                let currentCollapsed = self.state.collapsed;
                //Update the state
                return self.setState({
                    "collapsed": !currentCollapsed
                });
            }
        };
        //Return the toggle toolbar
        return React.createElement("div", toggleProps);
    }
    //Render the toolbar component
    render() {
        //Initialize the toolbar props
        let toolbarProps = {
            "className": [baseClass]
        };
        //Check if the layout is collapsed
        if (this.state.collapsed === true) {
            toolbarProps.className.push(baseClass + "--collapsed");
        }
        //Merge the classnames
        toolbarProps.className = toolbarProps.className.join(" ");
        //Return the toolbar wrapper
        return React.createElement("div", toolbarProps, this.renderContainer(), this.props.children);
    }
}

//Layout default props
Toolbar.defaultProps = {
    "color": "blue",
    "items": [],
    "groups": [],
    "current": null,
    "onClick": null
};

