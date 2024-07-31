import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function RecipeReviewCard() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        O
                    </Avatar>
                }
                title="Card HomeWork"
                subheader="25/07/2024"
            />
            <CardMedia
                component="img"
                height="200"
                image="cat.jpg"
                alt="Cat Image"
            />
            <CardContent>
                <Typography variant='h4'>Fourth</Typography>
                <Typography variant='h6'>subtitle</Typography>
                <hr />
                <Typography variant="body2" color="text.secondary">
                    Phone: 0549465764
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Adress: Israel
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Card Number: 1
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100vw" }}>
                    <Box>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton aria-label="phone">
                            <PhoneIcon />
                        </IconButton>
                        <IconButton aria-label="heart">
                            <FavoriteIcon />
                        </IconButton>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}
