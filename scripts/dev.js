//Import dependencies
var express = require('express');
var path = require('path');
var rollupMiddleware = require('rollup-middleware');

//Initialize the express application
var app = express();

//Initialize the rollup options
var rollup_options = { rollup: {}, generate: { format: 'es' } };

//Use the rollup middleware
app.use(rollupMiddleware(rollup_options));

//Serve static files
app.use('/examples/', express.static('./examples/'));

//Map the bower components folder
app.use('/bower_components', express.static('./bower_components/'));

//Run the server
app.listen(5000, function()
{
  //Display in console
  console.log('Server listening on port 5000');
});