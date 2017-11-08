//Colors object
var colors = {};

//List of available colors
colors.list = ['navy', 'green', 'teal', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'grey', 'white'];

//Navy palette
colors.navy = [ '#3f465a', '#495169', '#57607c', '#697496', '#8790ab', '#ffffff' ];

//Green palette
colors.green = [ '#15b784', '#18cd94', '#1add9f', '#32e7ad', '#48eab7', '#ffffff' ];

//Teal palette
colors.teal = [ '#13a08d', '#15b7a1', '#18d2ba', '#1be4c9', '#32e7cf', '#ffffff' ];

//Blue palette
colors.blue = [ '#1275ed', '#2a82ef', '#4894f0', '#599ef3', '#71acf4', '#ffffff' ];

//Purple palette
colors.purple = [ '#905cf0', '#9f73f2', '#b490f5', '#bfa2f6', '#cfb9f8', '#ffffff' ];

//Pink palette
colors.pink = [ '#f02872', '#f24081', '#f45b93', '#f570a1', '#f788b0', '#ffffff' ];

//Red palette
colors.red = [ '#e60036', '#ff003c', '#ff1a4f', '#ff3363', '#ff4d76', '#ffffff' ];

//Orange palette
colors.orange = [ '#ff5f33', '#ff734d', '#ff8463', '#ff9b80', '#ffaf99', '#ffffff' ];

//Yellow palette
colors.yellow = [ '#cc9900', '#e6ac00', '#ffbf00', '#ffc61a', '#ffcc33', '#ffffff' ];

//Grey palette
colors.grey = [ '#c3d7ef', '#d7e4f4', '#ebf2fa', '#f0f5fb', '#f1f4f9', '#57607c' ];

//White palette
colors.white = [ '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#57607c' ];

//Get a color by name
colors.get = function(key, index)
{
  //Check the index value
  if(typeof index !== 'number'){ index = 2; }

  //Check if this color exists
  if(colors.list.indexOf(key.toLowerCase()) === -1)
  {
    //Set the first color in the list
    key = colors[0];
  }

  //Return the color
  return colors[key.toLowerCase()][index];
};

//Get a random color
colors.random = function()
{
  //Get a random index
  var index = Math.floor(colors.list.length * Math.random());

  //Get the random color name
  var color = colors.list[index];

  //Return the base color
  return colors[color][2];
};

//Export the color object 
export default colors;
