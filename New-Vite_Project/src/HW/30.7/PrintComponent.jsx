import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function PrintComponent() {
    const [print, setPrint] = useState()

    return (
        < div style={{ display: "flex", justifyContent: "center", gap: 10 }
        }>
            <TextField onChange={(e) => setPrint(e.target.value)} />
            <Button variant='contained' onClick={() => console.log(print)}>Print</Button>
        </div >
    )
}
