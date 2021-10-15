import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            comments: '',
            topic:'React'
             
        }
    }
    
    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
    })
}

    handleCommentsChange = event => {
        this.setState({
            comments:event.target.value})
        }

    handleTopicChange = event => {
        this.setState({
            topic:event.target.value})
        }

    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`)
    }
    
    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>Name</label>
                   <input type='text' 
                   value={this.state.name} 
                   onChange={this.handleNameChange}
                   />
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
               </div>
               <div>Topic</div>
               <select value={this.state.topic}> onChange={this.handleTopicChange}
                   <option value="react">React</option>
                   <option value="angular">Angular</option>
                   <option value="vue">Vue</option>
               </select>
               
               <button>Submit</button>
               
           </form>
        )
    }
}

export default Forms
