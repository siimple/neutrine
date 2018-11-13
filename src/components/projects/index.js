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

