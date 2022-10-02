import axios from 'axios'

export default async (location, term) => {
    const response = await axios({
        method : 'get',
        url : `https://yelp-backend.netlify.app/.netlify/functions/search?location=${location}&term=${term}`
    })

    const num = 6 + 8

    return response
}