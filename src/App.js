import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mercedes', age: 25 },
      { name: 'Madonna', age: 30 },
      { name: 'Mark', age: 26 }
    ],
    newPersons: 'Jorge Push'
  }
  
  switchNameHandler = (newName) => {
    console.log(this.state.newPersons)
    this.setState({
      persons: [
        { name: newName, age: 55 },
        { name: 'Dunkirk', age: 60 },
        { name: 'McGreggor', age: 76 }
      ],
      newPersons: 'Donald Duck'
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Mercedes', age: 25 },
        { name: event.target.value, age: 30 },
        { name: 'Mark', age: 26 }
      ],
      newPersons: 'Foe Riden'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <button onClick={() => this.switchNameHandler('Button Mercedes')}>Click Me !</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Paragraph Mercedes')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>I drive Ferrari Enzo.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  } 
}

export default App;