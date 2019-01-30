//Import dependencies
import React from "react";
import Icon from "../../icon/index.js";
import * as reactUtils from "../../utils/react.js";

//Import dashboard styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-dashboard";

//Export dashboard component
export function Dashboard (props) {
    return reactUtils.basicComponent("div", props, baseClass);
}

//Export sidebar component
export function DashboardSidebar (props) {
    //Build all buttons
    let items = props.items.map(function (item, index) {
        //Check for null item
        if (item === null) {
            return null;
        }
        //Check the button type
        if (typeof item["type"] === "string" && item["type"] === "separator") {
            return React.createElement("div", {
                "className": baseClass + "-sidebar-separator",
                "key": index
            });
        }
        //Initialize the button props
        let itemProps = {
            "className": [baseClass + "-sidebar-link"],
            "onClick": function (event) {
                //Check the click function
                if (typeof props.onClick === "function") {
                    return props.onClick(item, index);
                }
            },
            "key": index
        };
        //Add the button icon
        let icon = null;
        if (typeof item["icon"] === "string") {
            icon = React.createElement(Icon, {
                "icon": item["icon"],
                "className": baseClass + "-sidebar-link-icon"
            });
        }
        //itemProps.className.push(baseClass + "-link-" + key);
        //Check if this link is active
        if (typeof item.active === "boolean" && item.active === true) {
            itemProps.className.push(baseClass + "-sidebar-link--active");
        }
        //Merge the classnames
        itemProps.className = itemProps.className.join(" ");
        //Return the button component
        return React.createElement("div", itemProps, icon, item["title"]); 
    });
    //Initialize the sidebar props
    let sidebarProps = {
        "className": baseClass + "-sidebar"
    }
    //Return sidebar component
    return React.createElement("div", sidebarProps, items, props.children);
}

//Sidebar default props
DashboardSidebar.defaultProps = {
    "items": [],
    "onClick": null
};

//Export header component
export class DashboardHeader extends React.Component {
    //Render the heeader title
    renderTitle() {
        let self = this;
        return React.createElement("div", {
            "className": baseClass + "-header-title",
            "onClick": self.props.onTitleClick
        }, this.props.title);
    }
    //Render the header subtitle
    renderSubtitle() {
        return React.createElement("div", {
            "className": baseClass + "-header-subtitle"
        }, this.props.subtitle);
    }
    //Render the menu user icon
    renderMenuUser() {
        return React.createElement("div", {
            "className": baseClass + "-header-menu-user"
        });
    }
    //Render the menu dropdown
    renderMenuDropdown() {
        let self = this;
        //Initialize the menu dropdown
        let dropdownProps = {
            "className": baseClass + "-header-menu-dropdown"
        };
        //Build the dropdown elements
        return React.createElement("div", dropdownProps, this.props.links.map(function (item, index) {
            //Initialize the item props
            let itemProps = {
                "className": baseClass + "-header-menu-item",
                "onClick": function (event) {
                    if (typeof self.props.onLinkClick === "function") {
                        return self.props.onLinkClick(event, item, index);
                    }
                },
                "key": index
            };
            //Return the item element
            return React.createElement("div", itemProps, item);
        }));
    }
    //Render the header menu
    renderMenu() {
        //Check for no links to display
        if (this.props.links.length === 0) {
            return null;
        }
        //Initialize the menu props
        let menuProps = {
            "className": baseClass + "-header-menu"
        };
        //Return the menu component
        return React.createElement("div", menuProps, this.renderMenuUser(), this.renderMenuDropdown());
    }
    render () {
        //Initialize the dashboard header props
        let headerProps = {
            "className": baseClass + "-header"
        };
        //Return the header element
        return React.createElement("div", headerProps, this.renderTitle(), this.renderSubtitle(), this.renderMenu());
    }
}

//Dashboard header default props
DashboardHeader.defaultProps = {
    "title": "",
    "subtitle": "",
    "links": [],
    "onLinkClick": null,
    "onTitleClick": null
};

//Export main dashboard container
export function DashboardMain (props) {
    return reactUtils.basicComponent("div", props, baseClass + "-main");
}

