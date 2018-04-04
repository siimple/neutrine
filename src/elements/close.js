import React from "react";
import {hyperscript as h} from "neutrine-utils";

//Close button class
export default class Close extends React.Component {
    render() {
        let self = this;
        let classList = ["siimple-close"];
        return h("div", {className: classList, onClick: self.props.onClick, style: self.props.style});
    }
}

//Default props
Close.defaultProps = { 
    size: null, 
    style: null, 
    onClick: null 
};

