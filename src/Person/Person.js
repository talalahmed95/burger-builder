import React from 'react';

const person = () => {
	return(
		<p>Hello! I am a Person. I am { Math.floor(Math.random() * 25) } years old.</p>
	);
}

export default person;