import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function HomePage() {

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
