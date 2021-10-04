import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Quest from './components/Quest'
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Greet name="Otis" heroName="Captain America" >
            <p>This is children props</p>
          </Greet>
          <Greet name="Karren" heroName="Superman" >
            <button>Press This</button> 
          </Greet>
          <Greet name="Lucas" heroName="Spiderman" >
          </Greet>
        </div>
        <div id="oo">
          <img src="https://ae01.alicdn.com/kf/HTB13h6WeXOWBuNjy0Fiq6xFxVXaI/7x5FT-Super-Hero-Sumerman-Spiderman-Captain-American-Custom-Photo-Studio-Background-Backdrop-Vinyl-150cm-x-220cm.jpg" alt="ete"/>
        </div>
        <div className= "kk">
          <Welcome></Welcome>
        </div>
      </React.Fragment>
    )
  }
} 



  
 


export default App;
