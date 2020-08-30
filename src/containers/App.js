import React, { Component } from 'react';
import styles from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

import CharValidView from '../components/CharValidView/CharValidView';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { name: 'Mercedes', age: 25, id: 1 },
      { name: 'Madonna', age: 30, id: 2 },
      { name: 'Mark', age: 26, id: 3 }
    ],

    username: 'Talal Ahmed',
    showPersons: false,
    showAssignment: false,
    showAssignment2: false,
    assignment2Input: '',
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            nameChanged={this.nameChangedHandler} />
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
    }

    // const charList = this.state.assignment2Input.split('').map((letter, index) => {
    //   return <Char 
    //     inputData={letter} 
    //     key={index}
    //     click={() => this.deleteLetterHandler(index)} />;
    // });

    let assignment2 = null;
    if (this.state.showAssignment2) {
      assignment2 = (
        <div className={styles.assignStyle}>
          <CharValidView input={this.state.assignment2Input}
            clicked={this.deleteLetterHandler}
            changed={this.inputChangedHandler}
            a2Input={this.state.assignment2Input} />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <button onClick={() => this.setState({showCockpit: false})}> Remove Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit title={this.props.appTitle}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} 
            personsLength={this.state.persons.length}
            showA1={this.state.showAssignment}
            showA2={this.state.showAssignment2}
            a1Clicked={this.toggleAssignmentHandler}
            a2Clicked={this.toggleAssignment2Handler} />
        ) : null}
        {persons}        
        {assignment}
        {assignment2}
      </div>
    );
  } 
}

export default App;