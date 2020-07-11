import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      { name: 'Mercedes', age: 25, id: 1 },
      { name: 'Madonna', age: 30, id: 2 },
      { name: 'Mark', age: 26, id: 3 }
    ],
    newPersons: 'Jorge Push',

    username: 'Talal Ahmed',

    showPersons: false,

    showAssignment: false
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

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Mercedes', age: 25 },
  //       { name: event.target.value, age: 30 },
  //       { name: 'Mark', age: 26 }
  //     ],
  //     newPersons: 'Foe Riden'
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; 
    //mutate state by copying then operating instead of operating direct the original array
    // const persons = this.state.persons.slice(); // old way
    const persons = [...this.state.persons]; // new way in es6
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  userNameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  toggleAssignmentHandler = () => {
    const doesShowAssignment = this.state.showAssignment;
    this.setState({showAssignment: !doesShowAssignment});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: '#000000',
      margin: '0 4px'
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
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)} />
          })}
          {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Paragraph Mercedes')}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>I drive Ferrari Enzo.</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
        </div>
      );
    }

    let assignment = null;
    if (this.state.showAssignment) {
      assignment = (
        <div>
          <br/>
          <h1 style={style2}>Assignment</h1>
          <UserInput username={this.state.username} namechange={this.userNameHandler} />
          <UserOutput username={this.state.username} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <button style={style} onClick={this.toggleAssignmentHandler}>Toggle Assignment</button>
        {persons}        
        {assignment}
      </div>
    );
  } 
}

export default App;