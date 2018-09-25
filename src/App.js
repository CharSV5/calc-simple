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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.decideMaths = this.decideMaths.bind(this);

  }



  handleChange(event) {
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
    console.log('submit!')
    event.preventDefault();
    const inputValue1 = this.state.inputValue1
    const inputValue2 = this.state.inputValue2
    let currentMathsFunc = ''

    switch (this.state.currentMaths) {
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

  handleNum(num) {
    if(this.state.inputValue1 === 0) {
      this.setState({
        inputValue1: num
      })
    } else {
      this.setState({
        inputValue2: num
      })
    }
  }
  


  render() {
    return (
      <div className="App">
        
          <button onClick={() => this.handleNum(1)}>1</button>
          <button onClick={() => this.handleNum(2)}>2</button>
          <button onClick={() => this.handleClick('+')}>+</button>
          <button onClick={() => this.handleClick('-')}>-</button>
          <button onClick={() => this.handleClick('/')}>/</button>
          <button onClick={() => this.handleClick('*')}>*</button>
          <form onSubmit={this.handleSubmit}>
          <input type="submit" value="=" />
        </form>
        {this.state.answer}
      </div>
    );
  }
}

export default App;
