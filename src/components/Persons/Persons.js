import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps', props);
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { msg: 'Snapshot' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate', snapshot);
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map( (person, index) => {
			return <ErrorBoundary key={person.id}>
					<Person 
				        name={person.name}
				        age={person.age}
				        click={() => this.props.clicked(index)}
				        changed={(event) => this.props.nameChanged(event, person.id)} />
					</ErrorBoundary>
		});
	}	
}

export default Persons;