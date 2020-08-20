import React from 'react';
import Char from '../CharComponent/CharComponent';
import Validation from '../ValidationComponent/ValidationComponent';

const charValidView = (props) => {
	const charList = props.input.split('').map((letter, index) => {
		return <Char 
			inputData={letter} 
	        key={index}
	        click={() => props.clicked(index)} />
	    });

		return <div>
			<input onChange={props.changed} value={props.a2Input}></input>
			<p>{props.a2Input}</p>
			<Validation inputLength={props.a2Input.length} />
			{charList}
	      </div> 
}


export default charValidView;