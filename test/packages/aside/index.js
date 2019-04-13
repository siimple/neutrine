Neutrine.ready(function () {
    //Aside testing component
    class AsideTest extends React.Component {
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
        //Render the aside test
        render () {
            return (
                <Neutrine.Aside visible={this.state.visible}>
                    <Neutrine.AsideBackground onClick={this.handleClose} />
                    <Neutrine.AsideContent position={this.state.position} width={this.state.width} height={this.state.height}>
                        <Neutrine.AsideClose onClick={this.handleClose} />
                        More content
                    </Neutrine.AsideContent>
                </Neutrine.Aside>
            );
        }
    };
    //Mount aside test component
    ReactDOM.render(<AsideTest />, document.getElementById("root"));
});

