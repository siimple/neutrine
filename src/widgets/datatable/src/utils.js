//Generate an array range 
export function range (start, length) {
    return Array(length).fill().map(function (el, index) {
        return start + index;
    });
}

//Convert an array to an object
export function arrayToObject (array, obj) {
    //Check for valid array
    if (typeof array === "object" && array !== null && array.length > 0) {
        array.forEach(function (value) {
            obj["" + value + ""] = true;
        });
    }
    //Return the provided object
    return obj;
}

