import React from 'react'
import PageHeader from '../Components/pages/PageHeader'
import { Button, Divider } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routesModel'

export default function ErrorPage() {
    const Navigate = useNavigate()
    return (
        <div>
            <PageHeader title="Error 404" subtitle="Page Not Found" />
            <Button onClick={() => Navigate(ROUTES.ROOT)}>Return To Home</Button>
        </div>
    )
}
