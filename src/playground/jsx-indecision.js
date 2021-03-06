const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of computer.',
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const len = app.options.length;
  const randNum = len && Math.floor(Math.random() * len);
  const option = app.options[randNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 'Here are your options' : 'no options'}
      <button disabled={!app.options.length} onClick={onMakeDecision}>
        What should I do ?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button> Add Option </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
