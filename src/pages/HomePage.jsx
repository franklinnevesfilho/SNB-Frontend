import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Listing from "../components/listing/Listing.jsx";
import {useNavigate} from "react-router-dom";

const HomePage = ({apiCall}) => {
    const navigate = useNavigate()
    const [jwt] = useState(localStorage.getItem('JWT') || '')
    const [listings, setListings] = useState([]);
    const [filteredlistings, setFilteredlistings] = useState([]);

    const getListings = () => {
        apiCall(
            '/user/get-all-listings',
            'GET',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            {},
            (r) => {
                console.log(r);
                setListings(r.node)
                setFilteredlistings(r.node)
            },
            (e) => {
                console.log(e);
                alert("Something went wrong, please try again later.")
                navigate("/")
            }
        );
    };
    function handleSearch (searchTerm){
        // Filter listings based on the search term
        const filtered = listings.filter((listing) =>
            listing.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredlistings(filtered);
    }

  useEffect(() => {
        getListings();
  }, []);
  return (
    <div className="">
      {/* navbar */}
      <Navbar onSearch={handleSearch}/>

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Resources
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vmax] p-4">
          {/*display a card for every listing*/}
            {filteredlistings.map((listing, item) => (
                <Listing
                    key={item}
                    listingParam={listing}
                    apiCall={apiCall}
                    sellerId={listing.sellerId}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
