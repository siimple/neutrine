Neutrine.ready(function () {
    //Panel testing component
    class PanelTest extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "visible": true,
                "position": "right",
                "width": "400px",
                "height": "400px"
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
        //Render the panel test
        render () {
            return (
                <Neutrine.Panel visible={this.state.visible}>
                    <Neutrine.PanelBackground onClick={this.handleClose} />
                    <Neutrine.PanelContent position={this.state.position} width={this.state.width} height={this.state.height}>
                        <Neutrine.PanelClose onClick={this.handleClose} />
                        More content
                    </Neutrine.PanelContent>
                </Neutrine.Panel>
            );
        }
    };
    //Mount panel test component
    ReactDOM.render(<PanelTest />, document.getElementById("root"));
});

