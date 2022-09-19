import React from 'react'
import { Typography, Grid, Button} from '@mui/material'
import {Link} from 'react-router-dom'

const Search = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6} md={2} >
                    <Typography>I'm the Search Page</Typography>
                </Grid>
                <Grid item xs={6} md={2} >Hello</Grid>
                <Grid item xs={6} md={2} >Tyson</Grid>
                <Grid item xs={6} md={2} >Taco</Grid>
                <Grid item xs={6} md={2} >Fish</Grid>
                <Grid item xs={6} md={2} >Butter</Grid>
            </Grid>
        
            <Typography>I'm the Test Grid</Typography>
            <Button component={Link} to="/testgrid" variant ="outlined"> Testgrid</Button>
        </>     
    )
}

export default Search