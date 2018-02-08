class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title : 'Indecision',
            subtitle : 'Put your life in the hands of a computer',
            options : []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    componentWillMount(){
        // console.log('componentWillMount');
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            
        }
        
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
            
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddOption(option) {

        if(!option) {
           return 'Enter a valid value to add';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options : [...prevState.options, option] }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options : [] }));
    }

    handleDeleteOption(option) {
        this.setState(prevState => ({ options : prevState.options.filter(o => o !== option)}));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length) 
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        return (
            <div>
                <Header
                    subtitle={this.state.subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    hasOptions={this.state.options.length > 0}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = props => {
    const { title, subtitle } = props;

    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title : 'Indecision'
}

const Action = props => {
    const { hasOptions, handlePick } = props;
    return (
        <div>
            <button
                disabled={!hasOptions}
                onClick={handlePick}>
                What should I do?
        </button>
        </div>
    )
}

const Options = props => {
    const { hasOptions, handleDeleteOptions, handleDeleteOption, options } = props;

    return (
        <div>
            <button
                disabled={!hasOptions}
                onClick={handleDeleteOptions}>
                Remove All
            </button>
            {options.length === 0 && <p>Please add some items to get started!</p>}
            {options.map((o, i) => {
                return <Option 
                            key={i} 
                            text={o}
                            handleDeleteOption={(e => handleDeleteOption(o))} />
            }
            )}
        </div>
    )
}

const Option = props => {
    return (
        <div>
            {props.text}
            <button onClick={props.handleDeleteOption}>Remove</button>
        </div>
    )
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: undefined };
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);