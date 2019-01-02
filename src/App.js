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
    let numRow1 = []
    let numRow2 = []
    let numRow3 = []
    let opRow = []
    const buttonsMaker = (myArray, row, eventHandler) => {
      for (let i of myArray) {
        row.push(<button onClick={() => eventHandler(i)} key={i}>{i}</button>)
      }
    }

    buttonsMaker(numArray.slice(0, 3), numRow1, this.handleNum)
    buttonsMaker(numArray.slice(4, 7), numRow2, this.handleNum)
    buttonsMaker(numArray.slice(7, 11), numRow3, this.handleNum)
    buttonsMaker(opArray, opRow, this.handleClick)

    return (
      <div className="box">
        <div className="display">
          {this.state.answer}
        </div>
        <div className="keys">
          <div className="button">{numRow1}</div>
          <div className="button">{numRow2}</div>
          <div className="button">{numRow3}</div>
          <div className="button">{opRow}</div>
          <div className="ops">
            <form onsubmit={this.handleClear}>
              <input className="button" type="submit" value="C" />
            </form>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className="button1" type="submit" value="=" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
