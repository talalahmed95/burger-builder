import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		setTimeout(() => {
			console.log('*** Saved data to mock server');
		}, 1000);
	}, [props.persons]);
	
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
			<h1>Assalam o Alaikum! Welcome to {props.title}</h1>
		    <p className={styleClass.join(' ')}>And... it's working. Try it !</p>
		    <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
		    <button className={btnClassAssign} onClick={props.a1Clicked}>Toggle Username</button>
        	<button className={btnClassAssign2} onClick={props.a2Clicked}>Toggle TextToLetter</button>
		</div>
	);
}

export default Cockpit;