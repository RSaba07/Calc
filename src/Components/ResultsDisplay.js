import React, {Component} from 'react';

class ResultsDisplay extends Component {
    render() 
    {
        var {result} = this.props;        
        return (
            <div className="answer">
                <p><b>{result}</b></p>
            </div>);
    }
}
export default ResultsDisplay;
