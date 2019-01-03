//Import dependencies
import React from "react";
import Icon from "../../icon/index.js";

//Import dashboard styles
import "./style.scss";

//Base class
let baseClass = "neutrine-layout-dashboard";

//Export dashboard component
export function Dashboard (props) {
    //Initialize the dashboard props
    let dashboardProps = {
        "className": baseClass
    };
    //Return dashboard component
    return React.createElement("div", dashboardProps, props.children);
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
    return React.createElement("div", sidebarProps, items);
}

//Sidebar default props
DashboardSidebar.defaultProps = {
    "items": [],
    "onClick": null
};

//Export header component
export function DashboardHeader (props) {
    //return (
    //    <div className="dashboard-header">
    //        <div className="dashboard-header-title">siimple</div>
    //        <div className="dashboard-header-subtitle">genomics</div>
    //        <div className="dashboard-header-user">
    //            <div className="dashboard-header-user-caret"></div>
    //            <div className="dashboard-header-user-dropdown">
    //                <div className="dashboard-header-user-dropdown-email">test@test.com</div>
    //            </div>
    //        </div>
    //    </div>
    //);
    //Buiuld the header title and subtitle elements
    let headerTitle = React.createElement("div", {"className": baseClass + "-header-title"}, props.title);
    let headerSubtitle = React.createElement("div", {"className": baseClass + "-header-subtitle"}, props.subtitle);
    //Initialize the dashboard header props
    let headerProps = {
        "className": baseClass + "-header"
    };
    //Return the header element
    return React.createElement("div", headerProps, headerTitle, headerSubtitle);
}

//Dashboard header default props
DashboardHeader.defaultProps = {
    "title": "",
    "subtitle": ""
};

//Export main dashboard container
export function DashboardMain (props) {
    //Initialize the main content props
    let mainProps = {
        "className": baseClass + "-main"
    };
    //Return the main content wrapper
    return React.createElement("div", mainProps, props.children);
}


