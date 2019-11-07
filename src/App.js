import React, { Component } from 'react';
import './App.css';
import UserInput from '../src/userInput/userInput';
import UserOutput from '../src/userOutput/userOutput';



export class App extends Component {
  state = {
    username: "Dimowo ogazi"
  }
  render() {
    return (
      <div>
        <UserInput />
        <UserOutput Username={this.state.username}/>
        <UserOutput Username="James oyanna" />
      </div>
    );
  }
  }
export default App;




