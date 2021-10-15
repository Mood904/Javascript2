import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'fontxl' : ''
    return (
        <div>
            <h1 className={`${className} primary`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet