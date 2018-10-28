import React from "react";

//Import components utils
import utils from "../utils.js";

//Import footer styles
import "siimple/scss/layout/_footer.scss";

//Footer layout component
export class Footer extends React.Component {
    render() {
        //Clone the footer props 
        let props = utils.filterProps(this.props, ["className", "color", "size"]);
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
        //Generate the footer classname
        props.className = utils.classNames(classList, this.props.className);
        //Render the footer div
        return React.createElement("div", props, this.props.children);
    }
}

//Default props
Footer.defaultProps = {
    "color": null, 
    "size": null 
};

//Footer title
export function FooterTitle (props) {
    return utils.basicComponent("div", props, "siimple-footer-title");
}

//Footer subtitle
export function FooterSubtitle (props) {
    return utils.basicComponent("div", props, "siimple-footer-subtitle");
}

//Footer group
export function FooterGroup (props) {
    return utils.basicComponent("div", props, "siimple-footer-group");
}

//Footer paragraph
export function FooterParagraph (props) {
    return utils.basicComponent("div", props, "siimple-footer-paragraph");
}

//Footer link
export function FooterLink (props) {
    return utils.basicComponent("a", props, "siimple-footer-link");
}

//Footer rule
export function FooterRule (props) {
    return utils.basicComponent("div", props, "siimple-footer-rule");
}

