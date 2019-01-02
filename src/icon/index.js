//Import dependencies
import React from "react";

//Import icons
import "siimple-icons/dist/siimple-icons.css";

//Export icon component
export default function Icon (props) {
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
    //Return the icon
    return React.createElement("span", {
        "className": iconClassNames.join(" "),
        "style": props.style
    });
}

//Icon default props
Icon.defaultProps = {
    "icon": null,
    "style": null,
    "className": null
};

