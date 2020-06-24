import React from 'react';

const person = (props) => {
	return(
		<p onClick={ props.click }>Hello! I am { props.name }. I am { props.age } years old. { props.children }</p>
	);
}

export default person;