import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Matt's Amazing Website</h2>
        </div>
        <p className="App-intro">
          Amazing Intro: One morning, Gregor Samsa awoke from his bed etc etc etc
        </p>
      </div>
    );
  }
}

export default App;
