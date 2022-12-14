import React from 'react'
//import { Typography, Grid, Button, Card, CardContent} from '@mui/material'
//import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults'

const Search = ({searchResults, setRestId}) => {
    //const people = ["Search","Taco","Fish","Butter","Hello"]
    const cheapFood = searchResults.filter((value) => {return value.price === "$"})
    const moderateFood = searchResults.filter((value) => {return value.price === "$$"})
    const expensiveFood = searchResults.filter((value) => {return value.price === "$$$"})

    return (
        <>
            <SearchResults food={cheapFood} title={"Cheap Food"} setRestId={setRestId} />
            <SearchResults food={moderateFood} title={"Moderate Food"} setRestId={setRestId}/>
            <SearchResults food={expensiveFood} title={"Expensive Food"} setRestId={setRestId}/>
        </>     
    )
}

export default Search