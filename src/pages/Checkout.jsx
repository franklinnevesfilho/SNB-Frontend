import Navbar from "../components/navbar/Navbar.jsx";
import CheckoutCard from "../components/listing/CheckoutCard.jsx";
import {useEffect, useState} from "react";

const Checkout = ({apiCall}) => {
  const [jwt] = useState(localStorage.getItem('JWT') || '')
  const [cart, setCart] = useState([]) // array of listing objects

  function removeItem (id) {
    apiCall(
        '/user/remove-from-cart/'+ id,
        'GET',
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        {},
        (r) => {
          console.log(r);
          setCart(r.node)
        },
        (e) => {
          console.log(e);
          alert("Something went wrong, please try again later.")
        }
    );
  }
  const getTotal = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price
    })
    return total
  }

  const getCart = () => {
    apiCall(
        '/user/get-cart',
        'GET',
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        },
        {},
        (r) => {
          console.log(r);
          setCart(r.node)
        },
        (e) => {
          console.log(e);
          alert("Something went wrong, please try again later.")
        }
    );
  }

  useEffect(() => {
    getCart()
  }, []);
  return (
      <div>
        <Navbar />

        <div className="w-[80%] m-auto mb-[4vmax]">
          <div className="flex flex-col gap-[1vmin] py-[2vmax]">
            <div className="text-[4vmax] font-semibold font-serif">My Cart</div>
            <div className="text-[1.5vmax] text-gray-400">
              Review and edit your order, then proceed to Checkout.
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto mb-[4vmax] flex justify-center md:justify-between flex-wrap">
          <div className="w-full flex flex-col gap-[3vmax] md:w-[70%] p-[2vmax]">
            {cart.map((listing, index) => (
                <div key={index}>
                  <CheckoutCard listing={listing} sellerId={listing.sellerId} apiCall={apiCall} removeItem={removeItem} />
                </div>
            ))}
          </div>

          <div className="w-full md:w-[30%]">
            <div className="md:sticky top-0 h-fit flex flex-col gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0] z-0">
              <div className="text-[2vmax]">Order Summary </div>
              <div className="text-[1.2vmax] flex justify-between">
                <div>Total Items : </div>
                <div>{cart.length + ' '}items</div>
              </div>
              <div className="w-full border-[1px] border-gray-400 "></div>
              <div className="text-[1.2vmax] flex justify-between">
                <div>Total:</div>
                <div>${getTotal()} USD</div>
              </div>
              <button className="bg-gradient-to-r from-[#ffde59] to-[#ff914d]  text-[1vmax] font-semibold p-[1vmax] px-[3vmax] rounded-full">
                Secure Checkout
              </button>
              <p className="text-[1vmax] text-center">
                Your purchased resources can be instantly downloaded from your
                SPS account
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Checkout;
