import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavProfileBtn from "./NavProfileBtn.jsx";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="border-b-[1px] border-black">
      <div className="flex lg:justify-around p-[2vmax]">
        <IoMenu
          className="absolute text-[5vmax] ml-2 h-[40px] lg:hidden"
          onClick={() => setisOpen(!isOpen)}
        />
        <Link
          to="/"
          className="flex flex-grow items-center lg:flex-grow-0 justify-center"
        >
          <img className="h-[2rem] lg:h-[3.5vmax]" src={Logo} alt="" />
        </Link>
        <div className="hidden  ml-[4vmax] lg:flex gap-2 border-[1px] w-[40%] items-center border-black rounded-full p-1 ">
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-2 px-[1vmax] border-0 border-transparent outline-none flex-grow text-[1vmax]"
          />
          <div className="bg-green-300 w-fit h-fit p-3 rounded-full">
            <IoSearchOutline className="text-[1.5rem] font-bold" />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-[2vmax]">
          <NavProfileBtn />
          <Link to="/checkout-cart">
            <IoCartOutline className="text-[2vmax]" />
          </Link>
        </div>
      </div>

      <div
        className={`flex flex-col justify-around gap-[4vmax] items-center  py-[4vmax]  bg-white w-full transition-all ${
          isOpen ? "absolute" : "hidden"
        } lg:hidden`}
      >
        <div className="flex gap-2 border-[1px] w-[80%] m-auto items-center border-black rounded-full p-1 ">
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-2 border-0 border-transparent outline-none flex-grow"
          />
          <div className="bg-green-300 w-fit h-fit p-3 rounded-full">
            <IoSearchOutline className="text-[1.5rem] font-bold" />
          </div>
        </div>
        <NavProfileBtn/>
        <Link to="/checkout">
            <IoCartOutline className="text-[2vmax]" />
          </Link>

      </div>
    </div>
  );
};

export default Navbar;