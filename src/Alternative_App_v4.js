import "./App.css";
import React, { Component } from 'react';

// An Alternative Using Components 
// Changed into a class component which will make things more convenient b/c
// components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
class Alternative_App_v4 extends Component {
  state = {
    name: "Jonathan",
  };

  handleClick = () => {
    this.setState({
      name: "Catherine"
    });
  };

  newheader(name){
    return(
      <div>
            <h1>Learn React with {name}</h1>
      </div>
        
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.newheader(this.state.name)}
          <button onClick={this.handleClick}>
            Change who you learn react with
          </button>
        </header>
      </div>
      
    );
  }
}
export default Alternative_App_v4;