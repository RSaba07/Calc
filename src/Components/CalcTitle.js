import React, {Component} from 'react';
class CalcTitle extends Component {

    render() 
    {        
        return (
            <div className="calctitle">
                <p>{this.props.value}</p>
            </div>);
    }
}
export default CalcTitle;
