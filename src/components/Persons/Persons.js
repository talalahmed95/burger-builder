import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {

	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps', props);
	// 	return state;
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	//     console.log('[Persons.js] shouldComponentUpdate');
	//     if (nextProps.persons !== this.props.persons ||
	//     	nextProps.clicked !== this.props.clicked ||
	//     	nextProps.nameChanged !== this.props.nameChanged) {
	//     	return true;
	//     }
	//     else {
	//     	return false;
	//     }
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { msg: 'Snapshot' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate', snapshot);
	}

	componentWillUnmount() {
    	console.log('[App.js] componentWillUnmount');
  	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map( (person, index) => {
			return <ErrorBoundary key={person.id}>
					<Person 
				        name={person.name}
				        age={person.age}
				        click={() => this.props.clicked(index)}
				        changed={(event) => this.props.nameChanged(event, person.id)}
				    />
					</ErrorBoundary>
		});
	}	
}

export default Persons;