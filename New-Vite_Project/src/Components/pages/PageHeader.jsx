import { Container, Divider, Typography } from '@mui/material'
import React from 'react'

export default function PageHeader({ title, subtitle }) {
    return (
        <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Typography variant='h1' component="h1">{title}</Typography>
            <Typography variant='h6' component="h2" sx={{ ml: 0.5 }}>{subtitle}</Typography>
            <Divider sx={{ my: 2 }} />
        </Container>
    )
}
