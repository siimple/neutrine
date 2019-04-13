Neutrine.ready(function () {
    //Side testing component
    class SideTest extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "visible": true,
                "position": "right",
                "width": "400px"
            };
            //Bind methods
            this.handleClose = this.handleClose.bind(this);
        }
        //Handle close click
        handleClose() {
            return this.setState({
                "visible": false
            });
        }
        //Render the side test
        render () {
            return (
                <Neutrine.Side visible={this.state.visible}>
                    <Neutrine.SideBackground onClick={this.handleClose} />
                    <Neutrine.SideContent position={this.state.position} width={this.state.width}>
                        <Neutrine.SideClose onClick={this.handleClose} />
                        More content
                    </Neutrine.SideContent>
                </Neutrine.Side>
            );
        }
    };
    //Mount side test component
    ReactDOM.render(<SideTest />, document.getElementById("root"));
});

