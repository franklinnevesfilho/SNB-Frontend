import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Listing from "../components/Listing.jsx";

function HomePage({apiCall}) {
  const [jwt] = useState(localStorage.getItem('JWT') || '')

  // define an array of listings
  const [listings, setListings] = useState([]);

    const getListings = () => {
        apiCall(
            '/user/get-all-listings',
            'GET',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            () => {},
            (r) => {
                console.log(r);
                setListings(r.node)
            }
        );
    };

  useEffect(() => {
        getListings();
  }, []);
  return (
    <div className="">
      {/* navbar */}
      <Navbar />

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Resources
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vmax] p-4">
          {/*display a card for every listing*/}
            {listings.map((listing, item) => (
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
