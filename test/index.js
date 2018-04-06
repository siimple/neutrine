import React from "react";
import reactDOM from "react-dom";
import {hyperscript as h} from "neutrine-utils";

import TestElements from "./components/elements.js";
import TestForm from "./components/form.js";
import TestGrid from "./components/grid.js";
import TestLayout from "./components/layout.js";
import TestTypography from "./components/typography.js";

//Test application
class Test extends React.Component {
    render() {
        let children = [
            h(TestElements, {}, null),
            h(TestForm, {}, null),
            h(TestGrid, {}, null),
            h(TestLayout, {}, null),
            h(TestTypography, {}, null)
        ];
        return h("div", {}, children);
    }
}

//Mount the test app
reactDOM.render(h(Test, {}), document.getElementById("root")); 

