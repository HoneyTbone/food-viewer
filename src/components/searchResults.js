import React from  'react'
import { Typography, Grid, Button, Card, CardContent, CardActionArea, CardMedia, CardActions} from '@mui/material'

const SearchResults = ({food, title}) => {

    return(
            <>

            {
                (food.length > 0) ? (
                    <Typography variant ="h4">{title}</Typography>
                ) : (
                    <></>
                )
            }


            
            <Grid container spacing={2} sx={{pt:2}}>
                {
                food.map(
                    (value, index) => {
                        return (
                            <Grid key={index}  item xs={6} md={2} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={value.image_url}
                                            alt={value.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <b>Location:</b> {value.location.address1} <br/>
                                                <b>Rating:</b> {value.rating} <br/>
                                                <b>Reviews:</b> {value.review_count} <br/>
                                                <b>Contact:</b> {value.display_phone}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            )
                        }
                    )
                }
            </Grid>
            </>

            
    )

}

export default SearchResults
