import React, { Component } from 'react';
import Component2 from './component2'

const colors =  ['red','green','blue'];

class Component1 extends Component {

    state = { 
       selectedOption: 'red',
    };

    handleChange = (e) => {
         this.setState({selectedOption: e.target.value})
    }
    
    render() { 
        return (
        <div className="container">
            <h5>Select the color</h5>
            <select onChange={this.handleChange} >
                {colors.map(color => <option key={color} value={color}>{color}</option>)}
            </select>
            <br></br>
            <h5>Output div</h5>
            <Component2 style={{backgroundColor: this.state.selectedOption, height: '100px', margin:'10px'}}></Component2>
      </div>);
    }
}
 
export default Component1;