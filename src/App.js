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
    this.handleNum = this.handleNum.bind(this);
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
    if (this.state.inputValue1 === 0) {
      this.setState({
        inputValue1: num
      })
    } else {
      this.setState({
        inputValue2: num
      })
    }
  }

  handleClear() { }

  render() {
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const opArray = ['+', '-', '/', '*']
    let numRow = []
    const buttonsMaker = (myArray, eventHandler) => {
      for (let i of myArray) {
        numRow.push(<button onClick={() => eventHandler(i)} key={i}>{i}</button>)
      }
    }

    buttonsMaker(numArray, this.handleNum)
    buttonsMaker(opArray, this.handleClick)

    return (
      <div className="App">
        <div>{numRow}</div>
        <form onsubmit={this.handleClear}>
          <input type="submit" value="C" />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="=" />
        </form>
        {this.state.answer}
      </div>
    );
  }
}

export default App;
