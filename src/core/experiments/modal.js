import React from "react";

//Import components utils
import * as utils from "../utils.js";
import classNames from "../../class-names.js";
import getProps from "../../get-props.js";

//Import modal styles
import "siimple/scss/experiments/_modal.scss";

//Export main modal component
export class Modal extends React.Component {
    //Render modal content
    renderContent() {
        let props = {
            "className": "siimple-modal-content",
            "style": null
        };
        //Check for modal custon width
        if (typeof this.props.width === "string") {
            props.style = {
                "maxWidth": this.props.width
            };
        }
        //Return the modal content
        return React.createElement("div", props, this.props.children);
    }
    render() {
        //Get the modal wrapper props
        let props = getProps(this.props, ["className", "width", "size"]);
        //Initialize the modal class
        props.className = ["siimple-modal"];
        //Check for modal predefined size
        if (typeof this.props.size === "string") {
            props.className.push("siimple-modal--" + this.props.size.toLowerCase());
        }
        //Merge the modal class names
        props.className = classNames(props.className, this.props.className);
        //Return the modal wrapper element
        return React.createElement("div", props, this.renderContent());
    }
}

//Modal default props
Modal.defaultProps = {
    "width": null,
    "size": null
};

//Modal header component
export class ModalHeader extends React.Component {
    //Render the modal header title
    renderTitle() {
        if (typeof this.props.title === "string") {
            return React.createElement("div", {"className": "siimple-modal-header-title"}, this.props.title);
        }
        //No title to display
        return null;
    }
    //Render the modal header close icon
    renderClose() {
        if (typeof this.props.onClose === "function") {
            //Render the close icon
            let self = this;
            return React.createElement("div", {
                "className": "siimple-modal-header-close",
                "onClick": self.props.onClose
            });
        }
        //No close icon to display
        return null;
    }
    render() {
        //Get the modal header props
        let props = getProps(this.props, ["className", "onClose", "title"]);
        props.className = classNames(["siimple-modal-header"], this.props.className);
        //Return the modal header wrapper
        return React.createElement("div", props, this.renderTitle(), this.renderClose());
    }
}

//Modal header props
ModalHeader.defaultProps = {
    "title": null,
    "onClose": null
};

//Modal body component
export function ModalBody (props) {
    return utils.basicComponent("div", props, "siimple-modal-body"); 
}

//Modal footer component
export function ModalFooter (props) {
    return utils.basicComponent("div", props, "siimple-modal-footer"); 
}

