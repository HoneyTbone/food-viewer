import React from 'react'
import { Typography, Grid, Button, Card, CardContent} from '@mui/material'
import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults'

const Search = ({searchResults}) => {
    const people = ["Search","Taco","Fish","Butter","Hello"]
    const cheapFood = searchResults.filter((value) => {return value.price === "$"})
    const moderateFood = searchResults.filter((value) => {return value.price === "$$"})
    const expensiveFood = searchResults.filter((value) => {return value.price === "$$$"})

    return (
        <>
            <SearchResults food={cheapFood} title={"Cheap Food"} />
            <SearchResults food={moderateFood} title={"Moderate Food"} />
            <SearchResults food={expensiveFood} title={"Expensive Food"} />
        </>     
    )
}

export default Search