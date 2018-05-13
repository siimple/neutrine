import React from "react";
import reactDOM from "react-dom";

import TestElements from "./components/elements.js";
import TestForm from "./components/form.js";
import TestGrid from "./components/grid.js";
import TestLayout from "./components/layout.js";
import TestTypography from "./components/typography.js";

let h = React.createElement;

//Test application
class Test extends React.Component {
    render() {
        let e1 = h(TestElements, {}, null);
        let e2 = h(TestForm, {}, null);
        let e3 = h(TestGrid, {}, null);
        let e4 = h(TestLayout, {}, null);
        let e5 = h(TestTypography, {}, null);
        return h("div", {}, e1, e2, e3, e4, e5);
    }
}

//Mount the test app
reactDOM.render(h(Test, {}), document.getElementById("root")); 

