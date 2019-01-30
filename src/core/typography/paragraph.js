import React from "react";

//Import component utils
import * as utils from "../../utils/react.js";

//Import paragraph styles
import "siimple/scss/typography/_paragraph.scss";

//Paragraph component
export default function Paragraph (props) {
    //Initialize the button props 
    let newProps = utils.filterProps(props, ["className", "lead"]);
    //Initialize the class names list 
    let classList = ["siimple-paragraph"];
    //Check for lead parargraph
    if (typeof props.lead === "boolean" && props.lead === true) {
        classList.push("siimple-paragraph--lead");
    }
    //Append the provided class names
    newProps.className = utils.classNames(classList, props.className);
    //Return the paragraph element
    return React.createElement("div", newProps, props.children);
}

//Paragraph default props
Paragraph.defaultProps = {
    "lead": false
};

