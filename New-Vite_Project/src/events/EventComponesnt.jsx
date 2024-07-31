import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function EventComponent(name) {
    const handleClick = () => {
        console.log("Hello World");
    }
    const handleClickWithData = (name) => {
        console.log("Your Name Is " + name);
    }
    const handleEventClick = () => {

    }
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <Button variant="contained" onClick={handleClick}>Click</Button>
            <Button variant="contained" onClick={() => (handleClickWithData("David"))}>Print My Name</Button>
            <Button variant="contained" onClick={(event) => { console.log(event) }}>Get The Event</Button>
            <TextField onChange={(event) => { console.log(event.target.value); }} />
            <Button variant='contained' onMouseOver={() => { console.log("hello"); }} >OnMouseOver</Button>
        </div >
    )



}
