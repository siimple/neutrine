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

//Merge props and replace 
export function mergeProps (props, extraProps) {
    Object.keys(props).forEach(function (key) {
        //Check for className prop key
        if (key === "className") {
            extraProps.className = classNames(extraProps.className, props.className);
        }
        //Check if this prop does not exists in the original props object
        else if (key !== "children" && typeof extraProps[key] === "undefined") {
            extraProps[key] = props[key];
        }
    });
    //Return the extra props
    return extraProps;
}

//Get prop value
export function getPropValue (prop, args) {
    if (typeof prop === "function") {
        return prop.apply(null, args);
    }
    //Return the prop value
    return prop;
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

//Create a new element mergin two props object
export function createMergedElement (tag, originalProps, newProps) {
    return React.createElement(tag, mergeProps(originalProps, newProps), originalProps.children);
}

//Execute the provided function when the DOM is ready
export function ready (callback) {
    //Check if the state is not loading
    if (document.readyState !== "loading") {
        return callback.call(null, null);
    }
    //Register the event listener
    document.addEventListener("DOMContentLoaded", function (event) {
        if (document.readyState === "loading") {
            return;
        }
        //Call the provided callback function
        return callback.call(null, event);
    });
}

