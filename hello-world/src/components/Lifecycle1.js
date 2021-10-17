import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'


 class Lifecycle1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Karren'
         }

         console.log('Lifecycle1 constrctor')
     }

     static getDerivedStateFromProps(props, state) {
         console.log('Lifecycle1 getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('Lifecycle1 componentDidMount')
        
     }
     
     
    render() {
        console.log('Lifecycle1 render')
        return (
            <div>
            <div>Lifecycle1</div>
            <Lifecycle2 />
            </div>
                
            
        )
    }
}

export default Lifecycle1
