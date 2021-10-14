import React from 'react'
import Person from './Person'

function NameList() {
    const names= ['Karren','Otis','Ghost']
    const persons=[
       {
    id: 1,
    name: 'Karren',
    age: 100,
    skill: 'Invisibility'
    },

    {

    id: 2,
    name: 'Otis',
    age:  101,
    skill:'Super Strength'
    },

    {
    id: 3,
    name: 'Ghost',
    age: 102,
    skill: 'Dying'
}

    ]




    const personList = persons.map(person => <Person person = {person} />)
    return (
        <div>
           {personList}
            
        </div>
    )
}

export default NameList
