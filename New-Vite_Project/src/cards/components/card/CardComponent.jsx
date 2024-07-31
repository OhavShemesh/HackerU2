import { Box, CardActionArea, CardHeader } from '@mui/material'
import React from 'react'
import CardBody from './CardBody'
import CardActionBar from './CardActionBar'
import CardHeaderComponent from './CardHeaderComponent';


export default function CardComponent({ card, handleEdit, handleLike, handleDelete }) {
    return (
        <CardActionArea sx={{ maxWidth: 345, boxShadow: "0px 0px 10px grey" }}>
            <CardHeaderComponent image={card.image.url} alt={card.image.alt} title={card.title} subtitle={card.subtitle} />
            <CardBody phone={card.phone} city={card.address.city} street={card.address.street} houseNumber={card.address.houseNumber} bizNumber={card.bizNumber} />
            <CardActionBar cardId={card._id} handleEdit={handleEdit} handleDelete={handleDelete} handleLike={handleLike} />
        </CardActionArea>
    )
}
