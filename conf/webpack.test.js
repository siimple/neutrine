let path = require("path");
//let MiniCssExtract = require("mini-css-extract-plugin");

//Import testing modules
let modules = require("./test.json");

//Export the webpack multi configuration
//https://github.com/webpack/webpack/tree/master/examples/multi-compiler 
module.exports = Object.keys(modules).map(function (key, index) {
    let module = modules[key];
    //Return the webpack configuration for this module
    return {
        "name": key,
        "mode": "development",
        "entry": module.entry,
        "output": {
            "path": path.join(process.cwd(), "bundle"),
            "filename": module.bundle
        },
        "externals": {
            "react": "React",
            "react-dom": "ReactDOM",
            "neutrine": "Neutrine"
        },
        "resolve": {
            "modules": [
                path.join(process.cwd(), "bower_components"),
                path.join(process.cwd(), "node_modules")
            ]
        },
        "module": {},
        "plugins": []
    };
});

