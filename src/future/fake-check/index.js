import React from "react";

//Import fake checkbox styles
import "./style.scss;"

//Export fake checkbox component
export function FakeCheck (props) {
    //Initialize the fake checkbox class list
    let classList = ["neutrine-fake-check"];
    if (props.selected === true) {
        classList.push("neutrine-fake-check--selected");
    }
    //Return the fake checkbox component
    return React.createElement("div", {
        "className": classList.join(" "),
        "onClick": props.onClick
    });
}

//Fake check default props
FakeCheck.defaultProps = {
    "selected": false,
    "onClick": null
}

