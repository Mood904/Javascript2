import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'
import NameList from './components/NameList'
import Person from './components/Person'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'





class App extends Component {
  render() {
    return (
      
        <div className="App">
       
        <Stylesheet primary={true} />
        <Inline />
       
        </div> 
        
        
    
    )
  }
} 




  
 


export default App;
