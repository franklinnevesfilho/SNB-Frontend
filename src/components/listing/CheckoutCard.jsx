import React, {useEffect, useState} from 'react';
import Book from "../../assets/cbook.jpg";

const CheckoutCard = ({listing, sellerId, apiCall,removeItem}) => {
    const [jwt] = useState(localStorage.getItem('JWT') || '')
    const [seller, setSeller] = useState({
        firstName:"",
        lastName:""
    })

    const remove = () =>{
        removeItem(listing.id)
    }


    useEffect(() => {
        apiCall(
            `/user/get-seller`,
            'POST',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            {sellerId},
            (r) => {
                console.log(r)
                setSeller(r.node)
                console.log(seller)
            },
            (e) => {
                console.log(e);
                setSeller({
                    firstName:"N/A",
                    lastName:""
                })
            }
        )
    }, []);
    return (
        <div className="flex gap-[1.5vmax] justify-start flex-wrap md:flex-nowrap bg-gray-50 p-[1vmax] rounded-[1vmax]">
            <img
                src={Book}
                alt=""
                className="h-[200px] w-[200px] border-2 border-gray-400 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-[1vmax]">
                <div className="text-[2vmax] font-semibold">
                    {listing.title}
                </div>
                <div className="text-[1.5vmax] font-semibold">
                    ${listing.price}
                </div>
                <div className="text-[1vmax]">
                    Sold by{" "}
                    <span className="text-blue-500 font-bold">
                        {seller.firstName + " " + seller.lastName}
                    </span>
                </div>
                <div className="text-[1vmax]">
                    {listing.description}
                </div>
                <button onClick={remove} className="mt-6 bg-red-400 text-[1.5vmax] w-fit p-[1vmin] px-[1vmax] rounded-full font-bold">
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CheckoutCard;