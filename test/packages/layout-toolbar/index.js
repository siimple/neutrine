Neutrine.ready(function () {
    let ToolbarTest = function (props) { 
        return (
            <Neutrine.Toolbar>
                Hello world
            </Neutrine.Toolbar>
        );
    };
    //Mount toolbar test component
    ReactDOM.render(<ToolbarTest />, document.getElementById("root"));
});


