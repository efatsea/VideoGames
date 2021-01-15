import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Forms';
import List from './List'

class App extends Component {
  
  constructor(props){
    super(props)
    this.addUser = this.addUser.bind(this);
    this.state={
      users:[],
      user:{name:'',lastName:'',username:''}
    }
  
  }
  
  addUser=(quer1,quer2,quer3)=>{
    this.setState(prevState=>({
      user:{
        ...prevState.user,
        name:quer1,
        lastName:quer2,
        username:quer3
      }
     }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Forms addUser={this.addUser} />
		<List/>
      </div>
    );
  }
}

export default App;
