import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
  }

  handleButtonClick = () => {
    this.setState ({
      isClicked: true
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}></button>
      </div>
    );
  }
}

export default App;
