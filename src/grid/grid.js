import React from "react";
import className from "../class-names.js";
import getProps from "../get-props.js";

import "siimple/scss/grid/_grid.scss";

//Grid class
export class Grid extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-grid", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Grid default props
Grid.defaultProps = {};

//Grid row class
export class GridRow extends React.Component {
    render() {
        let props = getProps(this.props, ["className"]);
        props.className = classNames("siimple-grid-row", this.props.className);
        return React.createElement("div", props, this.props.children);
    }
}

//Grid row default props
GridRow.defaultProps = {};

//Grid column class
export class GridCol extends React.Component {
    render() {
        let props = getProps(this.props, ["className", "size", "large", "medium", "small"]);
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
        return React.createElement("div", props, this.props.children);
    }
}

//Column default props
GridCol.defaultProps = {
    size: null, 
    large: null, 
    medium: null, 
    small: null
};

