import { CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CardBody({phone, city, street, houseNumber, bizNumber}) {
  return (
    <CardContent>
      <Typography variant="body2"> Phone: {phone}
      </Typography>
      <Typography variant="body2"> Adress: {city} {street} {houseNumber}
      </Typography>
      <Typography variant="body2">Card Number: {bizNumber}
      </Typography>
    </CardContent>

  )
}
