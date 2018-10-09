import React from 'react';

export default function NumberInput(props) {
	let value;
	/*function changeHandler() {
		console.log(value);
		props.onChange(value);
	}*/
	return (
		<form onSubmit={e => e.preventDefault()} >
			<label htmlFor="guess">Enter number 1-100</label>
			<br />
			<input type="number" id="guess" min={1} max={100} 
			  onChange={e => value = e.target.value} required />
			<br />
			<button onClick={() => props.onChange(value)}>submit</button>
		</form>
	);
}

console.log('hello');