import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavProfileBtn from "./NavProfileBtn.jsx";
import Search from "./Search.jsx";

const Navbar = ({onSearch}) => {
  const [isOpen, setisOpen] = useState(false);



  return (
      <div className="border-b-[1px] border-black z-50">
        <div className="flex lg:justify-around p-[2vmax]">
        <IoMenu className="cursor-pointer absolute text-[5vmax] ml-2 h-[40px] lg:hidden"
          onClick={() => setisOpen(!isOpen)}/>
        <Link to="/home" className="flex flex-grow items-center lg:flex-grow-0 justify-center">
          <img className="h-[2rem] lg:h-[3.5vmax]" src={Logo} alt="" />
        </Link>
        <div className="hidden  ml-[4vmax] lg:flex gap-2 border-[1px] w-[40%] items-center border-black rounded-full p-1 ">
          <Search id={'search1'} onSearch={onSearch}/>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-[2vmax]">
          <NavProfileBtn />
          <Link to="/checkout-cart">
            <IoCartOutline className="text-[2vmax]" />
          </Link>
        </div>
      </div>
      <div className={`flex flex-col justify-around gap-[4vmax] items-center border-b-2 border-black py-[4vmax]  bg-white w-full transition-all z-50 ${
          isOpen ? "absolute" : "hidden"
      } lg:hidden`}>
        <div className="flex gap-2 border-[1px] w-[80%] m-auto items-center border-black rounded-full p-1">
          <Search id={'search2'} onSearch={onSearch}/>
        </div>
        <NavProfileBtn/>
        <Link to="/checkout-cart">
            <IoCartOutline className="text-[2vmax]" />
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
