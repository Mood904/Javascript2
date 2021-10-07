import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from'./components/Message.js'

import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <>
        <div className="App">
         <Message></Message>
        </div> 
        
        
      </>
    )
  }
} 



  
 


export default App;
