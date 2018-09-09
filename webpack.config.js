let path = require("path");
let MiniCssExtract = require("mini-css-extract-plugin");

//Export the webpack configuration
module.exports = {
    "entry": "./index.js",
    "mode": "development",
    "output": {
        "library": "Neutrine",
        "libraryTarget": "umd",
        "path": path.resolve(__dirname, "./dist/"),
        "filename": "neutrine.js"
    },
    "externals": {
        "react": "React",
        "react-dom": "ReactDOM"
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
                        "options": {
                            "implementation": require("sass"),
                            "includePaths": ["./node_modules/"]
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        new MiniCssExtract({filename: "neutrine.css"})
    ]
};
