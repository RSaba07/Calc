import React, { Component } from 'react';
import './App.css';
import ResultsDisplay from './Components/ResultsDisplay';
import NumberPad from './Components/NumberPad';
import CalcTitle from './Components/CalcTitle';

class App extends Component 
{
  constructor(){
    super();
    this.state = {
      result: ""
    }    
  }

  // Handle the click events here.
  onClick = button => 
  {
    switch(button)
    {
        case "CE":
            // this.clear();
            this.clear();
            break;        
        case "C":         
            this.backspace()
            break;                  
        case "=":
            this.calculate()
            break;        
        case "x²":
            this.square()
            break;        
        case "√":
            this.squareRoot()
            break;                
    default: 
    {
        this.setState({
            result: this.state.result + button
        })
    }            
   }
};
render()
{
      return (
        <div>    
            <div className="pageLayout">        
                <CalcTitle value="Calculator Standard "/>                     
                <div>        
                    <ResultsDisplay result={this.state.result}/>                
                </div>
                <div>
                    <NumberPad onClick={this.onClick}/>
                </div>
            </div>
        </div>
    );
}

// function calls
clear = () => {   
    this.setState({result: ""})};
calculate = () => 
{
    if (this.state.result !=='') 
    {
        var ans=''; 
        try
        { 
            ans = eval(this.state.result); 
        } 
        catch(err) 
        { 
            this.setState({result: "Math Error"}); 
        } 
        if (ans===undefined) 
        this.setState({result: "Math Error"}); 

        // answer is updated in the state. 
        else
            this.setState({ result: ans}); 
    }
};

backspace = () => {
     var str = this.state.result; 
     if (str===Infinity) 
        this.setState({result: ""});    
     else
     {       
        str = str.substr(0,str.length-1); 
        this.setState({result: str}); 
     }
};

squareRoot = () => {
    this.setState({
        result: Math.sqrt(eval(this.state.result)).toFixed(8)
    })
};

square = () => {
    this.setState({
        result: Math.pow(this.state.result, 2)
    })
};

}
export default App;
