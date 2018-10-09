import React from 'react';
import './hotcold-display.css'

export default function HotColdDisplay(props) {
		let hotCold;
		let classHotCold;
		if (props.guess === "") {
			hotCold = "";
		}
		else if (props.close === 0) {
			hotCold = "Congratulations You got it!";
			classHotCold = "hot";
			return (
				<div className="hotcold-display">
					<h2 className={classHotCold}>{hotCold}</h2>
					<button>Play Again</button>
				</div>
			);
		}
		else if (props.close > 50) {
			hotCold = "Freezing";
			classHotCold = "cold";
		}
		else if (props.close > 20) {
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
				<h2 className={classHotCold}>{hotCold}</h2>
			</div>
		);
}