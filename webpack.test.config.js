let path = require("path");
let MiniCssExtract = require("mini-css-extract-plugin");

//Export the webpack configuration
module.exports = {
    "entry": "./test/index.js",
    "mode": "development",
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
                "use": [
                    MiniCssExtract.loader,
                    {loader: "css-loader"},
                    {
                        "loader": "sass-loader",
                        "options": {"includePaths": ["./node_modules/"]}
                    }
                ]
            }
        ]
    },
    "plugins": [
        new MiniCssExtract({filename: "bundle.test.css"})
    ]
};
