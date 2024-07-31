import React from 'react'

export default function NumberComponent({ numbers }) {
    return (
        <div>{numbers ? numbers.map((number)=>P).join(",") : "Hello"}</div>
    )
}
