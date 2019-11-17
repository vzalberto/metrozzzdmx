import React from 'react';
import MetroZZZDMXLogo from './MetroZZZDMXLogo/';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MetroZZZDMXLogo text={"logo"} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
