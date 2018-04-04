let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

//Compile the plugin to extract the compiled css text into an external file
let extractSass = new ExtractTextPlugin({ filename:"bundle.test.css" });

//Export the webpack configuration
module.exports = {
    "entry": "./test/index.js",
    "output": {
        "path": path.resolve(__dirname, "./test/"),
        "filename": "bundle.test.js"
    },
    "resolve": {
        "modules": [
            path.resolve(__dirname, "./bower_components/"),
            path.resolve(__dirname, "./node_modules/")
        ],
    },
    "module": {
        "rules": [
            {
                "test": /\.scss$/,
                "use": extractSass.extract({
                    "fallback": "style-loader",
                    "use": [
                        {"loader": "css-loader"},
                        {
                            "loader": "sass-loader",
                            "options": {"includePaths": ["./bower_components/"]}
                        }
                    ]
                })
            }
        ]
    },
    "plugins": [extractSass]
};
