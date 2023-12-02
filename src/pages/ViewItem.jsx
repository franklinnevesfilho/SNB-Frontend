import Navbar from "../components/navbar/Navbar.jsx";
import Book from "../assets/cbook.jpg";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import QuestionCard from "../components/listing/QuestionCard.jsx";
import AddToCart from "../components/checkout/AddToCart.jsx";

const ViewItem = ({apiCall}) => {
  const { itemId } = useParams();
  const [jwt] = useState(localStorage.getItem('JWT') || '')
  const [listing, setListing] = useState({
    id:"",
    title:"",
    description:"",
    datePosted:"",
    price:"",
    sellerId:"", // user object
    messages:[],
    image:[]
  })
  const [seller, setSeller] = useState({
    firstName:"",
    lastName:"",
  })

  const addToCart = () => {
    apiCall(
        '/user/add-to-cart/?listing=' + listing.id,
        'GET',
        {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        {},
        (r) => {
            console.log(r);
            alert("Added to cart!")
        },
        (e) => {
            console.log(e);
        }

    );
  }

  const getListingWithId = () =>{
    apiCall(
      `/user/select-listing/${itemId}`,
      'GET',
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      {'body':''},
      (r) => {
        console.log(r)
        setListing(r.node)
        getSeller(r.node.sellerId)
      },
      (e) => {
        console.log('error: ' + e);
      }
    )
  }
  const getSeller = (sellerId) => {
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
        },
        (e) => {
          console.log(e);
        }
    )
  }

  useEffect(() => {
    getListingWithId();
  }, []);
  return (
    <div>
      <Navbar />

      <div className="w-full py-[2vmax] flex items-center justify-center flex-col gap-[1.5vmax]">
        <div className="text-[3vmax] font-bold">
          {listing.title}
        </div>

        <div className="flex justify-between w-[90%]">
          <div className="w-full lg:w-[70%] flex flex-col gap-[3vmax]">
            <div className="flex flex-wrap gap-[2vmax]">
              <div className=" flex flex-col gap-[2vmax]">
                <img
                  src={Book}
                  alt=""
                  className="md:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] border-2 border-black object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col text-[1.3vmax] gap-[1vmax]">
                <div className="text-[2vmax] font-semibold">Description</div>
                <div className="flex flex-col gap-2 text-[1.3vmax]">
                  <p>
                    {listing.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[1vmax] py-[1vmax] border-y-[1px] border-black">
              <img
                src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
                alt=""
                className="h-[4vmax] rounded-full"
              />
              <div className="flex flex-col gap-[1vmin] text-[1vmax] ">
                <div className="font-bold">{seller.firstName + " " + seller.lastName}</div>
              </div>
            </div>

            <div className="md:hidden top-0 h-fit flex flex-col items-center gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0]">
              <div className="text-[2.5vmax]">${listing.price}</div>
              <AddToCart addToCart={addToCart}/>
            </div>
            <div className="flex flex-col gap-[2vmax]">
            </div>
            <div>
              <div className="text-[2vmax] font-semibold">Q & A</div>
              <div className="flex flex-col gap-[2vmax] my-[1vmax]">
                <QuestionCard user={''} question={''} answer={''} date={''} />
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 h-fit hidden md:flex flex-col items-center gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0]">
            <div className="text-[2.5vmax]">${listing.price}</div>
            <AddToCart addToCart={addToCart}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
