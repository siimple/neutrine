import React from "react";

//Import fake checkbox styles
import "./style.scss";

//Export fake checkbox component
export function FakeCheckbox (props) {
    //Initialize the fake checkbox class list
    let classList = ["neutrine-fake-checkbox"];
    if (props.selected === true) {
        classList.push("neutrine-fake-checkbox--selected");
    }
    //Return the fake checkbox component
    return React.createElement("div", {
        "className": classList.join(" "),
        "onClick": props.onClick
    });
}

//Fake check default props
FakeCheckbox.defaultProps = {
    "selected": false,
    "onClick": null
}

