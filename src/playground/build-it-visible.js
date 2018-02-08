class ToggleVisibility extends React.Component {

    constructor(props) {
        super(props)

        this.state = { visibility : false };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState(prevState => {
            return {
                visibility : !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button
                    onClick={this.toggleVisibility}
                >
                    {`${this.state.visibility ? 'Hide' : 'Show'} Details`}
                </button>
                {this.state.visibility && <p>I can hazz some details...</p>}
            </div>
        )
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));
