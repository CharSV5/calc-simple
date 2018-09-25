import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: 0,
      inputValue2: 0,
      currentMaths: '',
      answer: 0
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);

}



handleChange (event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

plus(inputValue1, inputValue2) {
    this.setState({
      answer: (parseInt(inputValue1) + parseInt(inputValue2))
    })
}

minus(inputValue1, inputValue2) {
  this.setState({
    answer: (parseInt(inputValue1) - parseInt(inputValue2))
  })
}

divide(inputValue1, inputValue2) {
  this.setState({
    answer: (parseInt(inputValue1) / parseInt(inputValue2))
  })
}

multiply(inputValue1, inputValue2) {
  this.setState({
    answer: (parseInt(inputValue1) * parseInt(inputValue2))
  })
}

decideMaths(currentMathsFunc, inputValue1, inputValue2) {
  return currentMathsFunc(inputValue1, inputValue2)
}

handleSubmit(event) {
  event.preventDefault();
  const inputValue1 = this.state.inputValue1
  const inputValue2 = this.state.inputValue2
  let currentMathsFunc = ''

  switch(this.state.currentMaths) {
    case '+':
    currentMathsFunc = this.plus
    break;

    case '-':
    currentMathsFunc = this.minus
    break;

    case '/':
    currentMathsFunc = this.divide
    break;

    case '*':
    currentMathsFunc = this.multiply
    break;
  }
  this.decideMaths(currentMathsFunc, inputValue1, inputValue2)
}



handleClick(maths) {
  this.setState({
    currentMaths: maths
  })
}


  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
       <label>
          Input 1
          <input name="inputValue1" type="text" value={this.state.inputValue1} onChange={this.handleChange} />
        </label>
        <button onClick={() => this.handleClick('+')}>+</button>
        <button onClick={() => this.handleClick('-')}>-</button>
        <button onClick={() => this.handleClick('/')}>/</button>
        <button onClick={() => this.handleClick('*')}>*</button>
        <label>
          Input 2
          <input name="inputValue2" type="text" value={this.state.inputValue2} onChange={this.handleChange} />
        </label>
        <input type="submit" value="=" />
        </form>
       {this.state.answer}
      </div>
    );
  }
}

export default App;
