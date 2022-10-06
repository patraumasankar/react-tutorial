import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['uma', 'kanha', 'sibani'];
    // const nameList = names.map(name => <h2>{name}</h2>);
    const nameList = names.map((name, index) => <h2 key={index}>{index} = {name}</h2>);
    const person = [
        {
            id: 1,
            name: 'uma',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'kanha',
            age: 21,
            skill: 'React'
        },
        {
            id: 3,
            name: 'sibani',
            age: 20,
            skill: 'Vue'
        }
    ]
    const personList = person.map(person => <Person key={person.id} person={person} />);
    return (
        <div>
            {/* <h3>{names[0]}</h3>
            <h3>{names[1]}</h3>
            <h3>{names[2]}</h3> */}
            {nameList}
            {personList}
        </div>
    )
}

export default NameList