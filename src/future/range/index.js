import React fromm "react";
import * as helpers from "../../helpers.js";

//Import range styles
import "./style.scss";

//Export range component
export const Range = React.forwardRef(function (props, ref) {
    //Clone the input props
    let inputProps = helpers.filterProps(props, ["fluid", "color", "className", "type"]);
    //Initialize the input class list
    let classList = ["neutrine-range"];
    //Check the fluid property
    if (typeof props.fluid === "boolean" && props.fluid === true) {
        classList.push("neutrine-range--fluid");
    }
    //Add the color property
    //if (typeof props.color === "string") {
    //    classList.push("neutrine-range--" + props.color);
    //}
    //Update range input props
    Object.assign(inputProps, {
        "type": "range",
        "className": helpers.classNames(classList, props.className),
        "ref": ref
    });
    //Return the input element
    return React.createElement("input", inputProps);
});

