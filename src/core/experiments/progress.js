import React from "react";

//Import component utils
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import rogress styles
import "siimple/scss/experiments/_progress.scss";

//Progress component
export default class Progress extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "color", "completed", "striped", "velocity"]);
        let classList = ["siimple-progress"];
        //Check the color property
        if (typeof this.props.color === "string") {
            classList.push("siimple-progress--" + this.props.color.toLowerCase().trim());
        }
        //Check the striped property
        if (typeof this.props.striped === "boolean" && this.props.striped === true) {
            //Check the velocity value
            if (typeof this.props.velocity === "string" && this.props.velocity !== "") {
                classList.push("siimple-progress--striped-" + this.props.velocity.toLowerCase().trim());
            } else {
                classList.push("siimple-progress--striped");
            }
        }
        //Build the progress bar conent
        let content = React.createElement("span", {"style": {"width": this.props.completed + "%"}}, this.props.children);
        props.className = classNames(classList, this.props.className);
        //Return the progress element
        return React.createElement("div", props, content);
    }
}

//Progress component default props 
Progress.defaultProps = {
    "color": "primary",
    "completed": 0,
    "striped": false,
    "velocity": null
};

