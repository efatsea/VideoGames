import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Forms';
import List from './List'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Forms/>
		<List/>
      </div>
    );
  }
}

export default App;
