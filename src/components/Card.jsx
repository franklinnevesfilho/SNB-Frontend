import { Link } from "react-router-dom";
import Book from "../assets/cbook.jpg";
import { FaStar } from "react-icons/fa6";

const Card = () => {
  return (
    <Link to="/singlepage">
    <div className="flex flex-col gap-1 p-2 rounded-lg shadow-[0_0_10px_#f0f0f0] ">
      <img src={Book} alt="" className="max-h-[200px] object-cover rounded-lg" />
      <div className="p-1 flex flex-col gap-1">
        <div className="font-semibold"> Best Book for Education Purpose</div>
        <div className="flex gap-1">
          <img
            src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
            alt=""
            className="h-[25px] rounded-full"
          />
          <div className="font-semibold">Unknown User</div>
        </div>
        <div className="font-bold">$12.20</div>
        <div className="flex gap-2 items-center">
          <FaStar className="text-yellow-400" /> 4.5 (8)
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
