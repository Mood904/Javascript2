import React, { Component } from 'react'


 class Lifecycle2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Karren'
         }

         console.log('Lifecycle2 constrctor')
     }

     static getDerivedStateFromProps(props, state) {
         console.log('Lifecycle2 getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('Lifecycle2 componentDidMount')
        
     }
     
     
    render() {
        console.log('Lifecycle2 render')
        return (
            <div>
            <div>Lifecycle2</div>
            
            </div>
                
            
        )
    }
}

export default Lifecycle2
