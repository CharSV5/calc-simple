import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: ''
    }  
    
}

  handleClick(num) {
    this.setState({
      inputValue1: this.state.inputValue1 + num
    })
    console.log(this.state.inputValue1)
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
