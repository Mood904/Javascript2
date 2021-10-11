import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('I just got Clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}

export default ClassClick
