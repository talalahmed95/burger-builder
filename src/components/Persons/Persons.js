import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
	console.log('[Persons.js] rendering...');
	return props.persons.map( (person, index) => {
		return <ErrorBoundary key={person.id}>
				<Person 
			        name={person.name}
			        age={person.age}
			        click={() => props.clicked(index)}
			        changed={(event) => props.nameChanged(event, person.id)} />
				</ErrorBoundary>
			});
}

export default persons;