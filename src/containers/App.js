import React, { Component } from 'react';
import styles from './App.module.css';

// import Radium, {StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

import Validation from '../components/ValidationComponent/ValidationComponent';
import Char from '../components/CharComponent/CharComponent';


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

    showAssignment: false,

    showAssignment2: false,

    assignment2Input: ''
  }
  
  // switchNameHandler = (newName) => {
  //   console.log(this.state.newPersons)
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 55 },
  //       { name: 'Dunkirk', age: 60 },
  //       { name: 'McGreggor', age: 76 }
  //     ],
  //     newPersons: 'Donald Duck'
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons]; 
    persons[personIndex] = person;

    this.setState({
      persons: persons,
      newPersons: 'Foe Riden'
    });
  }

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

  toggleAssignment2Handler = () => {
    const doesShowAssignment2 = this.state.showAssignment2;
    this.setState({showAssignment2: !doesShowAssignment2});
  }

  inputChangedHandler = (event) => {
    this.setState({assignment2Input: event.target.value});
  }

  deleteLetterHandler = (letterIndex) => {
    const text = this.state.assignment2Input.split('');
    text.splice(letterIndex, 1);
    const updatedText = text.join('')
    this.setState({assignment2Input: updatedText});
  }

  render() {

    let btnClassAssign = '';
    let btnClassAssign2 = '';

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            nameChanged={this.nameChangedHandler} />
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
          <h1 className={styles.assignStyle}>Assignment</h1>
          <UserInput username={this.state.username} namechange={this.userNameHandler} />
          <UserOutput username={this.state.username} />
        </div>
      );

      btnClassAssign = styles.red;
    }

    const charList = this.state.assignment2Input.split('').map((letter, index) => {
      return <Char 
        inputData={letter} 
        key={index}
        click={() => this.deleteLetterHandler(index)} />;
    });

    let assignment2 = null;
    if (this.state.showAssignment2) {
      assignment2 = (
        <div className={styles.assignStyle}>
          <input onChange={this.inputChangedHandler} value={this.state.assignment2Input}></input>
          <p>{this.state.assignment2Input}</p>
          <Validation inputLength={this.state.assignment2Input.length} />
          {charList}
        </div>
      );

      btnClassAssign2 = styles.red;
    }

    return (
      <div className={styles.App}>
        <Cockpit showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} 
          persons={this.state.persons} />
        <button className={btnClassAssign} onClick={this.toggleAssignmentHandler}>Toggle Assignment</button>
        <button className={btnClassAssign2} onClick={this.toggleAssignment2Handler}>Toggle Assignment 2</button>
        {persons}        
        {assignment}
        {assignment2}
      </div>
    );
  } 
}

export default App;