import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import './Person.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			<Aux>
				<p onClick={ this.props.click }>Hello! I am { this.props.name }. I am { this.props.age } years old.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
		);
	}	
}

export default Person;