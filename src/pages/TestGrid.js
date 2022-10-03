import React from 'react'
import { Grid , Button, Card, CardContent} from '@mui/material'
import {Link} from 'react-router-dom'

const TestGrid = () => {
    const people = ["Tyson","Taco","Fish","Butter","Hello"]
    return (
        <>
            <Grid container spacing={2} sx ={{pt:2}}>


                {
                    people.map(
                        (value) => {
                            return (
                                <Grid item xs={6} md={2} >
                                    <Card>
                                        <CardContent>
                                            {value}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    )
                }

            </Grid>
            <Button component={Link} to="/search" variant ="outlined"> Search</Button>
        </>
    )
}

export default TestGrid