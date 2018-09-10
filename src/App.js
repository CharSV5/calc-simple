import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: '',
      inputValue2: '',
      currentMaths: ''
    }  
    
}

  handleClick(num) {
    if (this.state.inputValue1 === '') {
      this.setState({
        inputValue1:  num
      })
    } else {
      console.log(num)
      this.setState({ 
        inputValue2:  num
      })
    }
    
    console.log('1..', this.state.inputValue1)
    console.log('2..',this.state.inputValue2)
  }

  handleMaths(maths) {
    this.setState({
      currentMaths: maths
    })
    console.log('maths', this.state.currentMaths)
  }
  render() {
    return (
      <div className="App">
       <button onClick={() => this.handleClick(1)}>1</button>
       <button onClick={() => this.handleMaths('+')}>+</button>
      </div>
    );
  }
}

export default App;
