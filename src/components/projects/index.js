//Import dependencies
import React from "react";

//Import styles
import "./style.scss";

//Export projects wrapper component
export function Projects (props) {
    return React.createElement("div", {"className": "neutrine-projects"}, props.childen);
}

//Projects row component
export function ProjectsRow (props) {
    return React.createElement("div", {"className": "neutrine-projects-row"}, props.children);
}

//Projects base column
export function ProjectsColumn (props) {
    //Initialize the column props
    let columnProps = {
        "className": "neutrine-projects-column",
        "style": {
            "flexGrow": (typeof props.size === "string") ? props.size : null
        }
    };
    //Return the column component
    return React.createElement("div", columnProps, props.children);
}

//Projects info column
export function ProjectsInfoColumn (props) {
    return React.createElement(ProjectsColumn, {"size": 2}, 
        React.createElement("div", {"className": "neutrine-projects-info-title"}, props.title),
        React.createElement("div", {"className": "neutrine-projects-info-description"}, props.description)
    );
}

