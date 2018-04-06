import React from "react";
import {hyperscript as h} from "neutrine-utils";

import "siimple/scss/layout/_footer.scss";

//Footer layout component
export default class Footer extends React.Component {
    render() {
        //Initialize the footer class list
        let classList = ["siimple-footer"];
        //Check the color
        if (typeof this.props.color === "string") {
            classList.push("siimple-footer--" + this.props.color.toLowerCase());
        }
        //Check the content size
        if (typeof this.props.size === "string") {
            classList.push("siimple-footer--" + this.props.size.toLowerCase());
        }
        //Render the footer div
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Default props
Footer.defaultProps = {
    color: null, 
    size: null, 
    style: null
};

