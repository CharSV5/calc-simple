import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: '',
      inputValue2: ''
    }  
    
}

  handleClick(num) {
    if (this.state.inputValue1 === '') {
      this.setState({
        inputValue1: this.state.inputValue1 + num
      })
    } else {
      console.log(num)
      this.setState({ 
        inputValue2: this.state.inputValue2 + num
      })
    }
    
    console.log('1..', this.state.inputValue1)
    console.log('2..',this.state.inputValue2)
  }
  render() {
    return (
      <div className="App">
       <button onClick={() => this.handleClick(1)}>1</button>
      </div>
    );
  }
}

export default App;
