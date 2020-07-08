import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
	return(
		<div className="UserOutput">
			<p>Marhaba! Ahlan wa Sahlan!</p>
			<p>You must be {props.username}</p>
		</div>
	);
}

export default userOutput;