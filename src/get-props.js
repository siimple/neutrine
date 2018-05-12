//Extract valid props
export default function getProps (props, ignoreProps) {
    //Check for no props object
    if (typeof props !== "object" || props === null) {
        return {};
    }
    //Check the ignore props array
    if (typeof ignoreProps !== "object" || Array.isArray(ignoreProps) === false) {
        ignoreProps = [];
    }
    let newProps = {}, keys = {};
    ignoreProps.concat(["children"]).forEach(function (key) {
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

