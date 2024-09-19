import logo from './logo.svg';
import './App.css';
import { GrAndroid } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-200'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <GrAndroid />
        </a>
      </header>
    </div>
  );
}

export default App;
