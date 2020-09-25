import React from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './assets/resume.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Explore my content
        </p>
        <ul>
          <li>
          <a
          className="App-link"
          href="https://soundcloud.com/matt-colozzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muzak
        </a>
          </li>
          <li>
          <a
          className="App-link"
          href="https://github.com/mattcolozzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
          </li>
          <li>
            <a className="App-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer">My Resume</a>
          </li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
