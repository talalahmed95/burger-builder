import React from 'react';
import './Person.css';

const person = (props) => {

	const rnd = Math.random();

	if (rnd > 0.85) {
		console.log(rnd);
		throw new Error('Something went wrong');
	}

	return(
		<div className="Person">
		<p onClick={ props.click }>Hello! I am { props.name }. I am { props.age } years old.</p>
		<p>{ props.children }</p>
		<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default person;