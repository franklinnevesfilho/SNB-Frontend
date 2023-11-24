import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className="border-b-[1px] border-black">
      <div className="flex lg:justify-around p-[2vmax]">
        <IoMenu className="absolute text-[5vmax] ml-2 h-[40px] lg:hidden" onClick={()=> setisOpen(!isOpen)}/>
        <Link to="/" className="flex flex-grow lg:flex-grow-0 justify-center">
          <img
            className="h-[40px]"
            src="https://static1.teacherspayteachers.com/tpt-frontend/releases/production/current/792404e66d1d57a3f54f.svg"
            alt=""
          />
        </Link>
        <div className="hidden lg:flex gap-2 border-[1px] w-[40%] border-black rounded-full p-1 ">
          <input
            type="text"
            placeholder="Search"
            className="ml-2 p-2 border-0 border-transparent outline-none flex-grow"
          />
          <div className="bg-green-300 w-fit p-3 rounded-full">
            <IoSearchOutline className="text-[1.5rem] font-bold" />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-[2vmax]">
          <div className="flex gap-2 text-[1.5vmax]">
            <Link to="/login" className="font-bold">Log In</Link>|
            <Link to="/signup" className="font-bold ">Join</Link>
          </div>
          <Link to="/checkout">
            <IoCartOutline className="text-[2vmax]" />
          </Link>
        </div>
      </div>

      <div className={`lg:flex justify-around pb-[2vmax] w-full transition-all ${isOpen ? "absolute" : "hidden"}`}>
        <ul className={`flex flex-col lg:flex-row gap-[2vmax] text-[1.5rem] bg-white p-[2vmax] lg:p-0 items-center font-bold lg:font-semibold lg:text-[1.5vmax]`}>
          <li className="hover:scale-110 hover:font-bold">Grade</li>
          <li className="hover:scale-110 hover:font-bold">Resource type</li>
          <li className="hover:scale-110 hover:font-bold">Seasonal</li>
          <li className="hover:scale-110 hover:font-bold">ELA</li>
          <li className="hover:scale-110 hover:font-bold">Math</li>
          <li className="hover:scale-110 hover:font-bold">Science</li>
          <li className="hover:scale-110 hover:font-bold">Social Studies</li>
          <li className="hover:scale-110 hover:font-bold">Languages</li>
          <li className="hover:scale-110 hover:font-bold">Art</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
