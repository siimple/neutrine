//Import dependencies
import React from "react";

//Import utils
import * as reactUtils from "../utils/react.js";

//Import icons
import "siimple-icons/dist/siimple-icons.css";

//Export icon component
export default function Icon (props) {
    //Filter props
    let filteredProps = reactUtils.filterProps(props, ["className", "icon"]);
    //Initialize the icon class name list
    let iconClassNames = ["si"];
    //Add the icon class name
    if (typeof props.icon === "string") {
        iconClassNames.push("si-" + props.icon);
    }
    //Check custom class names
    if (typeof props.className === "string") {
        iconClassNames.push(props.className);
    }
    //Add the class names
    filteredProps.className = reactUtils.classNames(iconClassNames, props.className);
    //Return the icon
    return React.createElement("span", filteredProps);
}

//Icon default props
Icon.defaultProps = {
    "icon": null,
    "style": null,
    "className": null
};

