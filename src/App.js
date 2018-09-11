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


handleSubmit(event) {
  if (this.state.currentMaths === '+') {
    this.setState({
      answer: (parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2))
    })
  } else {
    this.setState({
      answer: (parseInt(this.state.inputValue1) - parseInt(this.state.inputValue2))
    })
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
