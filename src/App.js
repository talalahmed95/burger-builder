import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mercedes', age: 25 },
      { name: 'Madonna', age: 30 },
      { name: 'Mark', age: 26 }
    ]
  }

  switchNameHandler = () => {
    alert('Button clicked !')
  }

  render() {
    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <button onClick={this.switchNameHandler}>Click Me !</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I drive Ferrari Enzo.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  } 
}

export default App;