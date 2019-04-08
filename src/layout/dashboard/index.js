//Import dependencies
import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";
import * as reactUtils from "../../utils/react.js";

//Import dashboard styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-dashboard";

//Export dashboard component
export function Dashboard (props) {
    return React.createElement("div", {"className": baseClass}, props.children);
}

//Export sidebar component
export function DashboardSidebar (props) {
    return React.createElement("div", {"className": baseClass + "-sidebar"}, props.children);
}

//Sidebar separator
export function DashboardSidebarSeparator (props) {
    return React.createElement("div", {
        "className": baseClass + "-sidebar-separator"
    });
}

//Sidebar item
export function DashboardSidebarItem (props) {
    //Initialize the button props
    let itemProps = {
        "className": [baseClass + "-sidebar-item"],
        "onClick": props.onClick
    };
    //Add the button icon
    let icon = null;
    if (props.icon !== null) {
        icon = React.createElement(Icon, {
            "icon": props["icon"],
            "className": baseClass + "-sidebar-item-icon"
        });
    }
    //itemProps.className.push(baseClass + "-link-" + key);
    //Check if this link is active
    if (typeof props.active === "boolean" && props.active === true) {
        itemProps.className.push(baseClass + "-sidebar-item--active");
    }
    //Merge the classnames
    itemProps.className = itemProps.className.join(" ");
    //Return the sidebar item element
    return React.createElement("div", itemProps, icon, props.text);
}

//Sidebar item default props
DashboardSidebarItem.defaultProps = {
    "text": "",
    "icon": null,
    "active": false,
    "onClick": null,
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

//Dashboard header title
export function DashboardHeaderTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header-title"
    });
}

//Dashboard header subtitle
export function DashboardHeaderSubtitle (props) {
    return React.createElement("div", props, {
        "className": baseClass + "-header-subtitle"
    });
}

//Export dashboard content container
export function DashboardContent (props) {
    //Content class list
    let classList = [baseClass + "-content"];
    //Check for fluid content
    if (props.fluid === true) {
        classList.push(baseClass + "-content--fluid");
    }
    //Return the content element
    return React.createElement("div", {"className": classList.join(" ")}, props.children);
}

//Dashboard content props
DashboardContent.defaultProps = {
    "fluid": false
};

