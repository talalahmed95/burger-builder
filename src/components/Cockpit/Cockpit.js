import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
	
	const styleClass = [];

    if (props.persons.length <= 2) {
      styleClass.push(styles.red);
    }

    if (props.persons.length <= 1) {
      styleClass.push(styles.bold);
    }

    let btnClass = '';
    let btnClassAssign = '';
    let btnClassAssign2 = '';

    if (props.showPersons) {
    	btnClass = styles.red;
    }

    if (props.showA1) {
    	btnClassAssign = styles.red;
    }

    if (props.showA2) {
    	btnClassAssign2 = styles.red;
    }

    return (
    	<div className={styles.Cockpit}>
			<h1>Assalam o Alaikum! This is a React App.</h1>
		    <p className={styleClass.join(' ')}>And... it's working. Try it !</p>
		    <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
		    <button className={btnClassAssign} onClick={props.a1Clicked}>Toggle Username</button>
        	<button className={btnClassAssign2} onClick={props.a2Clicked}>Toggle TextToLetter</button>
		</div>
	);
}

export default cockpit;