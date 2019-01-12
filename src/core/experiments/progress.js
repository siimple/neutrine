import React from "react";

//Import component utils
import * as reactUtils from "../../utils/react.js";

//Import rogress styles
import "siimple/scss/experiments/_progress.scss";

//Progress component
export default function Progress (props) {
    let newProps = reactUtils.filterProps(props, ["className", "color", "completed", "striped", "velocity"]);
    let classList = ["siimple-progress"];
    //Check the color property
    if (typeof props.color === "string") {
        classList.push("siimple-progress--" + props.color.toLowerCase().trim());
    }
    //Check the striped property
    if (typeof props.striped === "boolean" && props.striped === true) {
        //Check the velocity value
        if (typeof props.velocity === "string" && props.velocity !== "") {
            classList.push("siimple-progress--striped-" + props.velocity.toLowerCase().trim());
        } else {
            classList.push("siimple-progress--striped");
        }
    }
    //Build the progress bar conent
    let content = React.createElement("span", {"style": {"width": props.completed + "%"}}, props.children);
    newProps.className = reactUtils.classNames(classList, props.className);
    //Return the progress element
    return React.createElement("div", newProps, content);
}

//Progress component default props 
Progress.defaultProps = {
    "color": "primary",
    "completed": 0,
    "striped": false,
    "velocity": null
};

