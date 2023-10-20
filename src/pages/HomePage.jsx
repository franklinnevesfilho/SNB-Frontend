import React from 'react';

function HomePage() {
    const [allListings, setListings] = React.useState([])

    const makeQuery = () =>{
        let url = "https://sandbbackend.onrender.com"
        let path = "/personal-listings"
        let query = url + path

        callAPI(query).catch(console.error)
    }

    const callAPI = async(query) => {
        const response = (await fetch(query)).json();
        const node = await response.node;
        setListings(node)
    }

    return (
        <>
            <h1>HomePage</h1>
        </>
    );
}

export default HomePage;