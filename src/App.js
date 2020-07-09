import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      { name: 'Mercedes', age: 25 },
      { name: 'Madonna', age: 30 },
      { name: 'Mark', age: 26 }
    ],
    newPersons: 'Jorge Push',

    username: 'Talal Ahmed',

    showPersons: false
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

  userNameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: '#000000'
    }

    const style2 = {
      width: '30%',
      margin: '16px auto',
      border: '1px solid #eee',
      'box-shadow': '0 2px 3px #ccc',
      padding: '16px',
      'text-align': 'center',
      'background-color': '#ffa8a8',
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Paragraph Mercedes')}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>I drive Ferrari Enzo.</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}        
        <br/>
        <h1 style={style2}>Assignment</h1>
        <UserInput username={this.state.username} namechange={this.userNameHandler} />
        <UserOutput username={this.state.username} />
      </div>
    );
  } 
}

export default App;