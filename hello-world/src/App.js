import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'
import NameList from './components/NameList'
import Person from './components/Person'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import styles from './appStyles.modules.css'
import './appStyles.css'





class App extends Component {
  render() {
    return (
      
        <div className="App">
       
        <Stylesheet primary={true} />
        <Inline />
        <h1 className='error'>ERROR!!</h1>
        <h1 className='success'> Nice Work!!</h1>
        
       
        </div> 
        
        
    
    )
  }
} 




  
 


export default App;
