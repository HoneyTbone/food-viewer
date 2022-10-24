import React, { useState } from 'react'
import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import yelp from '../api/yelp'

const Layout = () => {
    const [searchText, setSearchText] = useState("I'm here. Good")
    const [zipText, setZipText] = useState("I'm here. Good")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState('nothing to see here')

    const searchApi = async (location, term) => {
        const response = await yelp(location, term)
        console.log(response.data.businesses)
        setResults(response.data.businesses)

        // const response2 = await fetch(`/api/yelp?term=${term}&location=${location}`)
        // const data = await response2.json()
        // console.log("hi", data)
       // setResults(data.businesses)

        // const response3 = await fetch(`api/yelpBusinessDetail`)
        // const data3 = await response3.json()
        // console.log("hi", data3)
    }

    const setSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(zipText, e.target.value)
    }

    const setZip = (zip) => {
        setZipText(zip.target.value)
        searchApi(zip.target.value, searchText)
    }

    return (
        <>
            <Paper sx={{ backgroundColor: "#eeeeee", pb: 2 }}>
                <BrowserRouter>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <TextField

                                        onKeyPress={
                                            (e) => {
                                                if (e.key === "Enter") {
                                                    setSearch(e)
                                                }
                                            }
                                        }
                                        label="Search Food"
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField

                                        onKeyPress={
                                            (zip) => {
                                                if (zip.key === "Enter") {
                                                    setZip(zip)
                                                }
                                            }
                                        }
                                        label="Zip Code"
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />


                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Typography variant="h6">Your search food results:{searchText}</Typography>
                    <Typography variant="h6">Your search zip results:{zipText}</Typography>
                    <Routes>
                        <Route exact path="/" element={<Search searchResults={results} setRestId={setRestId} />} />
                        <Route exact path="/search" element={<Search searchResults={results} setRestId={setRestId} />} />
                        <Route exact path="/detail" element={<Detail restId={restId} />} />
                    </Routes>
                </BrowserRouter>
            </Paper>
        </>
    )
}

export default Layout