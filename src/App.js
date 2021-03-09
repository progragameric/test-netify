// import logo from './logo.svg';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I wrote code to code
        </p>
        <a
          className="App-link"
          href="mailto:progragameric@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </header>
    </div>
  );
}

export default App;
