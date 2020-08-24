import React from 'react';

const userInput = (props) => {

	const style = {
		width: '30%',
		margin: '16px auto',
		border: '1px solid #eee',
		boxShadow: '0 2px 3px #ccc',
		padding: '16px',
		textAlign: 'center',
		backgroundColor: '#b6a8ff'
	}

	return(
		<div style={style}>
			<span>Enter Name: </span>
			<input type="text" onChange={props.namechange} value={props.username} />
		</div>
	);
}

export default userInput;