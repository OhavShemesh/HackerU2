import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function RecipeReviewCard() {
    const card = {
        _id: "63765801e20ed868a69a62c4",
        title: "first",
        subtitle: "subtitle",
        description: "testing 123",
        phone: "050-0000000",
        email: "test@gmail.com",
        web: "https://www.test.co.il",
        image: {
            url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
            alt: "Business card image",
        },
        address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "Shinkin",
            houseNumber: 3,
            zip: 1234,
        },
        bizNumber: 1000000,
        user_id: "63765801e20ed868a69a62c2",
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={card.image.url}
                alt={card.image.alt}
            />
            <CardHeader title={card.title} subheader={card.subtitle} />
            <Divider variant='middle' />
            <CardContent>
                <Typography variant="body2"> Phone: {card.phone}
                </Typography>
                <Typography variant="body2"> Adress: {card.address.city} {card.address.street} {card.address.houseNumber}
                </Typography>
                <Typography variant="body2">Card Number: {card.bizNumber}
                </Typography>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <EditIcon />
                    </IconButton>
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <PhoneIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    );
}
