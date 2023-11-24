import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Book from "../assets/cbook.jpg";
import { FaStar } from "react-icons/fa6";
import Card from "../components/Card";
import Footer from "../components/Footer";

function HomePage() {
  const [allListings, setListings] = React.useState([]);

  const makeQuery = () => {
    let url = "https://sandbbackend.onrender.com";
    let path = "/personal-listings";
    let query = url + path;

    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = (await fetch(query)).json();
    const node = await response.node;
    setListings(node);
  };

  return (
    <div className="">
      {/* navbar */}
      <Navbar />

      {/* top banner */}
      <div className="flex justify-center p-[2vmax]">
        <div className="w-full lg:w-[90%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-[1vmax]">
          <div className="text-white flex flex-col gap-4 p-[3vmax]">
            <div className="uppercase font-semibold">Welcome to TPT</div>
            <div className="w-[60%] text-[3rem] break-words font-serif">
              Where extraorinary teacher shares
            </div>
            <button className="p-2 px-4 bg-green-400 w-fit rounded-full text-black font-bold">
              Explore Now
            </button>
          </div>
          
        </div>
      </div>

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Elementary School Resources
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vmax] p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex justify-center p-[2vmax]">
        <div className="w-full lg:w-[80%] bg-violet-300 border-black border-2 rounded-[1vmax]">
          <div className="text-black flex flex-col gap-4 p-[3vmax]">
            <div className="uppercase font-semibold">Welcome to TPT</div>
            <div className="w-[60%] text-[3rem] break-words font-serif">
              Where extraorinary teacher shares
            </div>
            <button className="p-2 px-4 bg-green-400 w-fit rounded-full border-2 border-black text-black font-bold">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Elementary School Resources
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vmax] p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>


      <div className="h-[50vh] w-full bg-green-500 flex flex-col justify-center items-center gap-[1vmax]">
        <div className="text-[4vmax] w-[70%] text-center font-bold">
          Join our global community of educators today
        </div>
        <button className="bg-black rounded-full p-[1vmax] px-[2vmax] text-white">Sign Up</button>
      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;
