import {Link, useNavigate} from "react-router-dom";
import Book from "../../assets/cbook.jpg";
import { FaStar } from "react-icons/fa6";
import {useEffect, useState} from "react";

const Listing = ({listingParam, apiCall ,sellerId}) => {
  const [jwt] = useState(localStorage.getItem('JWT') || '')
  const [seller, setSeller] = useState({
    firstName:"",
    lastName:""
  })

  const[listing, setListing] = useState({
    id:"",
    title:"",
    description:"",
    datePosted:"",
    datePurchased:"",
    price:"",
    sellerId:"" // user object
  })

  const getSeller = () => {
      apiCall(
            `/user/get-seller`,
            'POST',
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
          },
            {sellerId},
            (r) => {
              setSeller(r.node)
            },
            (e) => {
              //console.log(e);
              setSeller({
                firstName:"N/A",
                lastName:""
              })
            }
      )
  }

  useEffect(() => {
    setListing(listingParam);
    getSeller();
  }, []);
  return (
    <Link to={"/viewItem/" + listing.id}>
    <div className="flex flex-col gap-1 p-2 rounded-lg shadow-[0_0_10px_#f0f0f0] ">
      <img src={Book} alt="" className="max-h-[200px] object-cover rounded-lg" />
      <div className="p-1 flex flex-col gap-1">
        <div className="font-semibold">{listing.title}</div>
        <div className="flex gap-1">
          <img
            src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
            alt=""
            className="h-[25px] rounded-full"
          />
          <div className="font-semibold">{seller.firstName + " " + seller.lastName}</div>
        </div>
        <div className="font-bold">$ {listing.price}</div>
      </div>
    </div>
    </Link>
  );
};

export default Listing;
