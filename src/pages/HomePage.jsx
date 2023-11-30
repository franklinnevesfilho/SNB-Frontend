import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Listing from "../components/listing/Listing.jsx";
import {useNavigate} from "react-router-dom";
import {list} from "postcss";
import listing from "../components/listing/Listing.jsx";

const HomePage = ({apiCall}) => {
    const navigate = useNavigate()
    const [jwt] = useState(localStorage.getItem('JWT') || '')
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [search, setSearch] = useState('');

    // Calls the API to get all listings needed using the jwt token as authentication param.
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
                console.log(r.node.length);
                setListings(r.node)
                setFilteredListings(r.node)
            },
            (e) => {
                alert("Something went wrong, logging out.")
                navigate("/")
            }
        );
    };

    // handle search function should return a filtered list if items are available, if not it should return all listings.
    function handleSearch(searchTerm) {
        setSearch(searchTerm);
    }

    // The first useEffect is needed on initial page render
    // The second is used to update the filtered listings if the search bar is being used
    useEffect(() => {
        getListings();
    }, []);
    useEffect(() => {
      const filtered = listings.filter((listing) =>
          listing.title.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length === 0 && search.trim() !== "") {
          alert("No listings with this name");
          setFilteredListings(listings);
      } else {
          console.log("found listings");
          setFilteredListings(filtered);
      }

  }, [search, listings]);
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
            {
                filteredListings.map((listing) => (
                <Listing
                    key={listing.id}
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
