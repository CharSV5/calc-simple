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

// imaPureFunction(input1, input2){
//   return Math.random(1) + input2
// }

// ImNOTaPurefunction(input1, imaPureFunction) {
//   const sum = imaPureFunction(2, 2)
//   return  input1 + sum
// }

handleSubmit(event) {
  const inputValue1 = this.state.inputValue1
  const inputValue2 = this.state.inputValue2


  if (this.state.currentMaths === '+') {
    this.plus(inputValue1, inputValue2)
  } else if (this.state.currentMaths === '-') {
    this.minus(inputValue1, inputValue2)
  } else if (this.state.currentMaths === '/') {
    this.divide(inputValue1, inputValue2)
  } else {
    this.multiply(inputValue1, inputValue2)
  }
  event.preventDefault();
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
    
       =
      
       {this.state.answer}
      </div>
    );
  }
}

export default App;
