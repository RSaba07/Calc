import React, {Component} from 'react';
import Button from './Button.js'; 

class NumberPad extends Component {
     render() {
        return (
            <div className="button">                                                                 
                <button name="CE" className="clearer" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name="C" className="clearer" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="x²" className="operators" onClick={e => this.props.onClick(e.target.name)}>x²</button>
                <button name="√" className="operators" onClick={e => this.props.onClick(e.target.name)}>√</button><br/>                                                     
                <button name="7" className="numbers" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="numbers" onClick={e => this.props.onClick(e.target.name)}>8</button>            
                <button name="9" className="numbers" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="/" className="operators" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>                
                <button name="4" className="numbers" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="numbers" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="numbers" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="*" className="operators" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>                                
                <button name="1" className="numbers" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="numbers" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="numbers" onClick={e => this.props.onClick(e.target.name)}>3</button>                
                <button name="-" className="operators" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>                                
                <button name="0" className="numbers" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." className="operators" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="=" className="operators" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="+" className="operators" onClick={e => this.props.onClick(e.target.name)}>+ </button><br/>                                
            </div>
        );
    }
}
export default NumberPad;