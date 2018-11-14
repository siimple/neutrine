//Import dependencies
import React from "react";

//Import styles
import "./style.scss";

//Export projects wrapper component
export function Projects (props) {
    return React.createElement("div", {"className": "neutrine-projects"}, props.children);
}

//Projects row component
export function ProjectsRow (props) {
    //Build row props
    let rowProps = {
        "className": "neutrine-projects-row",
        "onClick": (typeof props.onClick === "function") ? props.onClick : null
    };
    //Return row component
    return React.createElement("div", rowProps, props.children);
}

//Projects base column
export function ProjectsColumn (props) {
    //Initialize the column props
    let columnProps = {
        "className": "neutrine-projects-column",
        "style": {
            "flexGrow": (typeof props.size === "string") ? props.size : null
        },
        "onClick": (typeof props.onClick === "function") ? props.onClick : null
    };
    //Return the column component
    return React.createElement("div", columnProps, props.children);
}

//Projects info column
export function ProjectsInfoColumn (props) {
    //Build info column props
    let infoProps = {
        "size": 2,
        "onClick": (typeof props.onClick === "function") ? props.onClick : null
    };
    //Return info column
    return React.createElement(ProjectsColumn, infoProps, 
        React.createElement("div", {"className": "neutrine-projects-info-title"}, props.title),
        React.createElement("div", {"className": "neutrine-projects-info-description"}, props.description)
    );
}

