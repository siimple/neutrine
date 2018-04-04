import React from "react";
import {hyperscript as h} from "neutrine-utils";

//Close button class
export default class Close extends React.Component {
    render() {
        var self = this;
        var class_list = [ 'siimple-close' ];
        return h('div', { className: class_list, onClick: self.props.onClick, style: self.props.style });
    }
}

//Default props
Close.defaultProps = { size: null, style: null, onClick: null };

