import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  } 
}

export default App;