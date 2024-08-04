import { Label } from '@mui/icons-material'
import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MyFormExample() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: ""
    })
    const handleChange = (e) => {
        let targetName = e.target.name
        setData((current) => ({ ...current, [targetName]: e.target.value }))
    }
    const handleCheck = () => {
        console.log(data);
    }
    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "column", width: 500, gap: 2 }}>
                <TextField label="First Name" variant='outlined' onChange={handleChange} name='firstName' />
                <TextField label="Last Name" variant='outlined' onChange={handleChange} name='lastName' />
                <TextField label="Phone Number" variant='outlined' onChange={handleChange} name='phone' />
                <TextField label="Email" variant='outlined' onChange={handleChange} name='email' />
                <TextField label="Address" variant='outlined' onChange={handleChange} name='address' />
                <Button variant='contained' onClick={handleCheck}>Send</Button>
            </Container>
        </div>
    )
}
