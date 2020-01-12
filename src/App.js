import React from 'react';
import logo from './logo.svg';
import Data from './components/data';
import InputData from './components/inputData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <p>sample example Redux</p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <InputData />
        <Data />

      </header>
    </div>
  );
}

export default App;
