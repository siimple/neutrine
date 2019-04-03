//Import dependencies
let express = require("express");
let path = require("path");

//Server render
process.nextTick(function () {
    let app = express();
    //Enable cors
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        return next();
    });
    //Register static folders routes
    app.use("/dist", express.static(path.join(process.cwd(), "dist")));
    app.use("/node_modules", express.static(path.join(process.cwd(), "node_modules")));
    app.use("/bower_components", express.static(path.join(process.cwd(), "bower_components")));
    app.use("/", express.static(path.join(process.cwd(), "test")));
    //Not found middleware
    app.use("*", function (req, res) {
        return res.sendStatus(404);
    });
    //Listen to test port
    app.listen(3000, function () {
        return console.log("Neutrine Testing service listening on port 3000");
    });
});


