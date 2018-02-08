console.log('Hello from app.js')

const app = {
    title : 'Indecision App',
    subTitle : 'Put your life in the hands of a computer',
    options : []
}

const onFormSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No Options!'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do ?</button>
            <button onClick={onRemoveAll} disabled={app.options.length === 0}>Remove All</button>
            <ol>
                {app.options.map((o, i) => <li key={i}>{o}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();