//Import dependencies
import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import dashboard styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-dashboard";

//Export dashboard component
export function Dashboard (props) {
    //Dashboard class styles
    let classList = [baseClass];
    //Check if sidebar is not visible
    if (props.hideSidebar === true) {
        classList.push(baseClass + "--hide-sidebar");
    }
    //Check if sidebar is collapsed
    else if (props.collapseSidebar === true) {
        classList.push(baseClass + "--collapse-sidebar");
    }
    //Check for light dashboard
    if (props.light === true) {
        classList.push(baseClass + "--light");
    }
    //Build the dashboard props
    let dashboardProps = {
        "className": helpers.classNames(classList, props.className),
        "style": props.style
    };
    //Return the dahsboard element
    return React.createElement("div", dashboardProps, props.children);
}

//Dashboard default props
Dashboard.defaultProps = {
    "light": false,
    "hideSidebar": false,
    "collapseSidebar": false
};

//Export sidebar component
export function DashboardSidebar (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-sidebar"
    });
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
export function DashboardHeader (props) {
    /*
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
    //*/
    //Initialize the dashboard header props
    let headerProps = {
        "className": baseClass + "-header"
    };
    //Return the header element
    return React.createElement("div", headerProps, props.children);
}

//Dashboard header default props
/*
DashboardHeader.defaultProps = {
    "title": "",
    "subtitle": "",
    "links": [],
    "onLinkClick": null,
    "onTitleClick": null
};
*/

//Dashboard header toggle
export function DashboardHeaderToggle (props) {
    let toggleProps = {
        "className": baseClass + "-header-toggle",
        "onClick": props.onClick
    };
    //Build the toggle icon
    let icon = React.createElement(Icon, {
        "icon": "menu",
        "style": {
            "fontSize": "30px"
        }
    });
    //Return the header toggle element
    return React.createElement("div", toggleProps, icon);
}

//Dashboard header title
export function DashboardHeaderTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-header-title"
    });
}

//Dashboard header subtitle
export function DashboardHeaderSubtitle (props) {
    return helpers.createMergedElement("div", props, {
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

