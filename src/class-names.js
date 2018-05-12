export default function classNames () {
    //Initialize the list of class names
    let list = [];
    //Parse all arguments 
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        //Check for undefined or null argument 
        if (typeof arg === "undefined" || arg === null) {
            continue;
        }
        //Check for string class name 
        else if (typeof arg === "string") {
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
    //Return the joined class names
    return list.join(" ");
}

