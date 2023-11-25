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

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Resources
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

      <div className="w-[80%] m-auto flex flex-col gap-2 py-[2vmax]">
        <div className="font-bold text-[1.5rem]">
          Explore Resources
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
    </div>
  );
}

export default HomePage;
