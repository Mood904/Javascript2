import React from 'react'

function Greet() {
 return <h1>Hello Karren</h1>
 const Greet = props => {
console.log(props)
    return (
        <div>
            <h1>
                Hello Awesome {props.name} a.k.a {props.heroName}
            </h1>
                {props.children}
        </div>
    )
}
}
 export default Greet