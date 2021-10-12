import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         messgae: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
        this.setState({
            message: 'Peace Out'
        })
    
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.messgae}     
                </div>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
}

export default EventBind