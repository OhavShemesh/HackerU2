import React from 'react'

export default function Targil({firstname}) {
    let people = [
        { name: firstname, age: "24" },
        { name: "dolev", age: "23" },
        { name: "ofek", age: "27" }
    ]
    return (
        <>
            <ul>
                {people.map((person) => <li>name:{person.name}, age:{person.age}</li>)}
            </ul>
        </>
    )
}
