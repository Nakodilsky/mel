import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestDb from './TestDB';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <TestDb />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
