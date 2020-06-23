import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Mercedes', age: 25 },
      { name: 'Madonna', age: 30 },
      { name: 'Mark', age: 26 }
    ]

  });

  const [newPersonsState, setNewPersonsState] = useState({newPersons: 'Jorge Push'});
  
  console.log(personsState, newPersonsState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Laurie', age: 55 },
        { name: 'Dunkirk', age: 60 },
        { name: 'McGreggor', age: 76 }
    ]
    });

    setNewPersonsState({newPersons: 'Donald Duck'});
  }


  return (
      <div className="App">
        <h1>Assalam o Alaikum! This is a React App.</h1>
        <button onClick={switchNameHandler}>Click Me !</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I drive Ferrari Enzo.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
  ); 
}

export default App;