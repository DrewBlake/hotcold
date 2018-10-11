import React from 'react';
import './hotcold-display.css'

export default function HotColdDisplay(props) {
		const guessArray = props.guessArray.map((guess, index) => (
			<h3 key={index}>
				{guess}
			</h3>			
		));

		let hotCold;
		let classHotCold;
		//let newRandom = Math.floor((Math.random() * 100) + 1);
		if (props.guess === "") {
			hotCold = "";
		}
		else if (props.close === 0) {
			hotCold = "Congratulations You got it!";
			classHotCold = "hot";
			return (
				<div className="hotcold-display">
					<h2 className={classHotCold}>{hotCold}</h2>
					<button onClick={() => props.onChange()}>Play Again
					</button>
				</div>
			);
		}
		else if (props.close > 50) {
			hotCold = "Freezing";
			classHotCold = "cold";
		}
		else if (props.close >= 20) {
			hotCold = "Cold";
			classHotCold = "cold";
		}
		else if (props.close < 10) {
			hotCold = "On Fire";
			classHotCold = "hot";
		}
		else if (props.close < 20) {
			hotCold = "Warm";
			classHotCold = "hot";
		}
		
		return (
			<div className="hotcold-display">
				<h2 className={classHotCold}>{hotCold} {props.guess}</h2>
				<h2>Your guess history:</h2> 
				<div>{guessArray}</div>
			</div>
		);
}