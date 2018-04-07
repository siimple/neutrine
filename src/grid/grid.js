import React from "react";
import {classNames, hyperscript as h} from "neutrine-utils";
import {omit} from "kofi";

import "siimple/scss/grid/_grid.scss";

//Grid class
export class Grid extends React.Component {
    render() {
        let props = omit(this.props, ["className", "children"]);
        props.className = classNames("siimple-grid", this.props.className);
        return h("div", props, this.props.children);
    }
}

//Grid default props
Grid.defaultProps = {};

//Grid row class
export class GridRow extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className"]);
        props.className = classNames("siimple-grid-row", this.props.className);
        return h("div", props, this.props.children);
    }
}

//Grid row default props
GridRow.defaultProps = {};

//Grid column class
export class GridCol extends React.Component {
    render() {
        let props = omit(this.props, ["children", "className", "size", "large", "medium", "small"]);
        let classList = ["siimple-grid-col"];
        //Check the column size
        if (typeof this.props.size === "number") {
            classList.push("siimple-grid-col--" + this.props.size);
        }
        if (typeof this.props.large === "number") {
            classList.push("siimple-grid-col-lg--" + this.props.large);
        }
        if (typeof this.props.medium === "number") {
            classList.push("siimple-grid-col-md--" + this.props.medium);
        }
        if (typeof this.props.small === "number") {
            classList.push("siimple-grid-col-sm--" + this.props.medium);
        }
        props.className = classNames(classList, this.props.className);
        return h("div", props, this.props.children);
    }
}

//Column default props
GridCol.defaultProps = {
    size: null, 
    large: null, 
    medium: null, 
    small: null
};

