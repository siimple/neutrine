import React from "react";
import {hyperscript as h} from "neutrine-utils";

//Grid class
export class Grid extends React.Component {
    render() {
        return h("div", {className: "siimple-grid", style: this.props.style}, this.props.children);
    }
}

//Grid default props
Grid.defaultProps = {style: null};

//Grid row class
export class GridRow extends React.Component {
    render() {
        return h("div", {className: "siimple-grid-row", style: this.props.style}, this.props.children);
    }
}

//Grid row default props
GridRow.defaultProps = {style: null};

//Grid column class
export class GridCol extends React.Component {
    render() {
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
        return h("div", {className: classList, style: this.props.style}, this.props.children);
    }
}

//Column default props
GridCol.defaultProps = {
    size: null, 
    large: null, 
    medium: null, 
    small: null, 
    style: null
};

