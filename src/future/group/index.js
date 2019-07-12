import React from "react";
import {Icon} from "../../icon/index.js";
import * as helpers from "../../helpers.js";

//Import styles
import "./style.scss";

//Group component base class
let baseClass = "neutrine-group";

//Group container
export function Group (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass
    });
}

//Main group container
export function GroupRow (props) {
    let newProps = helpers.filterProps(props, ["border", "hover", "className"]);
    //Initialize the row class list
    let classList = [baseClass + "-row"];
    if (props.border === true) {
        classList.push(baseClass + "-row--border");
    }
    if (props.hover === true) {
        classList.push(baseClass + "-row--hover");
    }
    //Check dashed row
    if (props.dashed === true) {
        classList.push(baseClass + "-row--dashed");
    }
    //Build the new props class 
    newProps.className = helpers.classNames(classList, props.className);
    //Return the row component
    return React.createElement("div", newProps, props.children);
    //return helpers.createMergedElement("div", props, {
    //    "className": baseClass + "-row"
    //});
}

//Row default props
GroupRow.defaultProps = {
    "hover": true,
    "dashed": false,
    "border": false
};

//Group item component
export function GroupColumn (props) {
    //Extract item component props
    let newProps = helpers.filterProps(props, ["visibleOnlyOnHover", "className", "primary", "secondary"]);
    //Initialize the class list
    let classList = [baseClass + "-column"];
    if (props.visibleOnlyOnHover === true) {
        classList.push(baseClass + "-column--visible-only-on-hover");
    }
    //Check for primary column
    if (props.primary === true) {
        classList.push(baseClass + "-column--primary");
    }
    //Check for secondary column
    else if (props.secondary === true) {
        classList.push(baseClass + "-column--secondary");
    }
    //Add classlist to new props
    newProps.className = helpers.classNames(classList, props.className);
    //Return the new component
    return React.createElement("div", newProps, props.children);
}

//Column default props
GroupColumn.defaultProps = {
    "visibleOnlyOnHover": false,
    "primary": false,
    "secondary": false
};

//Group title
export function GroupTitle (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-title"
    });
}

//Group description
export function GroupDescription (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-description"
    });
}

//Group text
export function GroupText (props) {
    return helpers.createMergedElement("div", props, {
        "className": baseClass + "-text"
    });
}

//Group icon
export function GroupIcon (props) {
    //Initialize group icon class-names
    let classList = [baseClass + "-icon"];
    //Check for custom background color
    if (typeof props.color === "string") {
        classList.push("siimple--bg-" + props.color);
    }
    //Return the icon
    return helpers.createMergedElement(Icon, props, {
        "className": classList.join(" ")
    });
}

//Group icon color
GroupIcon.defaultProps = {
    "color": "primary"
};

//Group action
export function GroupAction (props) {
    return helpers.createMergedElement(Icon, props, {
        "className": baseClass + "-action"
    });
}

//Group label
export function GroupLabel (props) {
    let classList = [baseClass + "-label"];
    //Check the label color
    if (typeof props.color === "string") {
        classList.push(baseClass + "-label--" + props.color);
    }
    //Build the new label props
    let labelProps = {
        "className": classList.join(" ")
    };
    //Return the label element
    return React.createElement("span", labelProps, props.text);
}

//Label props
GroupLabel.defaultProps = {
    "color": "primary",
    "text": ""
};

//Group add icon
export function GroupAdd (props) {
    return helpers.createMergedElement(Icon, props, {
        "className": baseClass + "-add",
        "icon": "plus"
    });
}

