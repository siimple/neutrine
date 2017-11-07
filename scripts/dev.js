//Import dependencies
var express = require('express');
var rollupMiddleware = require('rollup-middleware');

//Rollup plugins
var nodeResolve = require('rollup-plugin-node-resolve');
var bowerResolve = require('rollup-plugin-bower-resolve');

//Initialize the express application
var app = express();

//Initialize the rollup options
var options = { rollup: {}, generate: {} };
options.rollup.plugins = [ bowerResolve(), nodeResolve() ];
options.generate.format = 'es';

//Use the rollup middleware
app.use(rollupMiddleware(options));

//Serve static files
app.use(express.static(process.cwd()));

//Run the server
app.listen(5000, function()
{
  //Display in console
  console.log('Server listening on port 5000');
});