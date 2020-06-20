import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <Person name="Mercedes" age="22"/>
        <Person name="Paul" age="18">I drive Ferrari Enzo.</Person>
        <Person name="Dave" age="26"/>
      </div>
    );
  } 
}

export default App;