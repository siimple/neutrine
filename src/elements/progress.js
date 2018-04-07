import React from "react";
import {hyperscript as h} from "neutrine-utils";
import {concat, omit} from "kofi";

import "siimple/scss/elements/_progress.scss";

//Progress component
export default class Progress extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className", "color", "completed", "striped", "velocity"]);
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
        let content = h("span", {style: {width: this.props.completed + "%"}}, this.props.children);
        props.className = concat(classList, this.props.className);
        return h("div", props, content);
    }
}

//Progress component default props 
Progress.defaultProps = {
    color: "blue",
    completed: 0,
    striped: false,
    velocity: null
};

