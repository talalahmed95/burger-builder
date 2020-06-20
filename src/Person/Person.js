import React from 'react';

const person = (props) => {
	return(
		<p>Hello! I am { props.name }. I am { props.age } years old.</p>
	);
}

export default person;