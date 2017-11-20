import React from 'react';
import hyperscript from 'kofi-hyperscript';

//Generate the react hyperscript wrapper
var h = hyperscript(React.createElement, { });

//Export the hyperscript wrapper
export default h;
