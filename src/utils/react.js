//Import dependencies
import React from "react";

//Filter props list
export function filterProps (props, ignoreProps) {
    //Check for no props object
    if (typeof props !== "object" || props === null) {
        return {};
    }
    //Check the ignore props array
    if (typeof ignoreProps !== "object" || Array.isArray(ignoreProps) === false) {
        ignoreProps = [];
    }
    let newProps = {};
    //Initialize the ignored keys of the props with the children prop
    let keys = {
        "children": true
    };
    ignoreProps.forEach(function (key) {
        keys[key] = true;
    });
    //Filter the props object
    Object.keys(props).forEach(function (key) {
        if (!keys[key]) {
            newProps[key] = props[key];
        }
    });
    //Return the new props object
    return newProps;
}

//Join class names
export function classNames () {
    //Initialize the list of class names
    let list = [];
    //Parse all arguments 
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        //Check for undefined or null argument 
        if (typeof arg !== "undefined" && arg !== null) {
            //Check for string class name 
            if (typeof arg === "string") {
                list.push(arg); 
            }
            //Check for an array of class strings 
            else if (typeof arg === "object" && Array.isArray(arg) === true) {
                arg.forEach(function (value) {
                    if(typeof value === "string") {
                        list.push(value);
                    }
                });
            }
        }
    }
    //Return the joined class names
    return list.join(" ");
}

//Join class names alias
export function joinClassNames () {
    return classNames.apply(null, arguments);
}

//Generate a basic component
export function basicComponent (type, props, className) {
    //Extract all props except className and children
    let newProps = filterProps(props, ["className"]);
    //Update the component classname
    newProps.className = classNames(className, props.className);
    //Return the new element
    return React.createElement(type, newProps, props.children);
}
