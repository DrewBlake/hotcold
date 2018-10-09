import React from 'react';
import HotColdDisplay from './hotcold-display';
import NumberInput from './number-input';
import './guess-number.css';


export default class GuessNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            randomNum: Math.floor((Math.random() * 100) + 1),
            output: "",
            userGuess: ""
        
        }
    } 

    setOutput(output) {
        this.setState({
            output
        });
    }

    setUserGuess(userGuess) {
        this.setState({
            userGuess
        });
    }

    

   
    
    render() {
        
        let close = this.state.randomNum - this.state.userGuess;
        if (close < 0) {
            close = (close * -1);
        }
        
        console.log(close);
        const answer = this.state.randomNum;
        console.log(answer);
        console.log(this.state.userGuess);
        
        return (
            <div className="guess-number">
                <h1>Hot Cold Number Game</h1>                
                <NumberInput id="guess"
                  onChange={value => this.setUserGuess(value)} 
                 />                
                <HotColdDisplay text={this.state.output} close={close} 
                  guess={this.state.userGuess}
                 />
            </div>
        );
    }
}

