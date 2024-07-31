import { Box, CardActions, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';

export default function CardActionBar({ handleEdit, handleLike, handleDelete, cardId }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <DeleteIcon onClick={() => handleDelete(cardId)} />
                </IconButton>
                <IconButton onClick={() => handleEdit(cardId)} aria-label="share">
                    <EditIcon />
                </IconButton>
            </CardActions>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <PhoneIcon />
                </IconButton>
                <IconButton onClick={() => handleLike(cardId)}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Box >
    )
}
