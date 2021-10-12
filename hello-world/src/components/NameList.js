import React from 'react'

function NameList() {
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




    const personList=persons.map(person => <h2>I am {person.name}.I am {person.age} years old. I have mastered the art of {person.skill}</h2>)
    return (
        <div>
           {personList}
            
        </div>
    )
}

export default NameList
