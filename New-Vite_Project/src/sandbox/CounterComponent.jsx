import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function CounterComponent() {
    const [number, setNumber] = useState(0)
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Button variant='contained' onClick={() => setNumber(number + 1)}>+</Button>
            <Typography sx={{ fontSize: "2rem" }}>{number}</Typography>
            <Button variant='contained' onClick={() => setNumber(number - 1)}>-</Button>
        </div>
    )
}
