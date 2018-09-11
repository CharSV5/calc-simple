import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue1: null,
      inputValue2: null,
      currentMaths: null,
      answer: 0
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange (event) {
  this.setState({
    [event.target.name]: event.target.value
    
  })
}

// handleChange (event) {
//   this.setState({
//     [event.target.name]: event.target.value
//   })
//   if (this.state.inputValue2) {
//     this.setState({
//     answer: (parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2))
//     })
//   }
// }

handleSubmit(event) {
  this.setState({
    answer: (parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2))
  })
  event.preventDefault();
}


  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
       <label>
          Input 1
          <input name="inputValue1" type="text" value={this.state.inputValue1} onChange={this.handleChange} />
        </label>
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
