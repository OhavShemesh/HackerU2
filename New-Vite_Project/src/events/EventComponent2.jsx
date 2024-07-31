import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function EventComponent2() {
    const handleClickTargil = () => {

    }
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <Button variant="contained" onClick={(e) => { console.log(e.target.textContent) }}>Static Function</Button>
        </div >
    )
}