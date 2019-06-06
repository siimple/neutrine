import React from "react";

//Component styles
import "./style.scss";
let baseClass = "neutrine-bottom-side";

//Export bottom side component
export class BottomSide extends React.Component {
    constructor(props) {
        super(props);
        //Initial state
        this.state = {
            "collapsed": false
        };
        //Bind methods
        this.handleCollapse = this.handleCollapse.bind(this);
    }
    //Handle side collapse
    handleCollapse() {
        return this.setState({
            "collapsed": !this.state.collapsed
        });
    }
    //Render the bottom side component
    render() {
        let classList = [baseClass];
        //Check if component is collapsed
        if (this.state.collapsed === true) {
            classList.push(baseClass + "--collapsed");
        }
        //Return the bottom side component
        return (
            <div className={classList.join(" ")}>
                <div className={baseClass + "-header"} onClick={this.handleCollapse}>
                    {this.props.title}
                    <div className={baseClass + "-chevron"} />
                </div>
                <div className={baseClass + "-body"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

//Bottom side component default props
BottomSide.defaultProps = {
    "title": ""
};

