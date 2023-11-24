import { IoCartOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import Book from "../assets/cbook.jpg";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="flex justify-between lg:w-[80%] m-auto p-[2vmax] border-b-[1px]">
        <Link to="/" className="flex justify-center">
          <img
            className="h-[40px]"
            src="https://static1.teacherspayteachers.com/tpt-frontend/releases/production/current/792404e66d1d57a3f54f.svg"
            alt=""
          />
        </Link>

        <div className="flex justify-center items-center gap-[2vmax]">
          <div className="flex gap-2 text-[1.5vmax]">
            <Link to="/login" className="font-bold">Log In</Link>|
            <Link to="/signup" className="font-bold ">Join</Link>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto mb-[4vmax]">
        <div className="flex flex-col gap-[1vmin] py-[2vmax]">
          <div className="text-[4vmax] font-semibold font-serif">My Cart</div>
          <div className="text-[1.5vmax] text-gray-400">
            Review and edit your order, then proceed to Checkout.
          </div>
        </div>

        <div className="flex justify-center md:justify-between flex-wrap">
          <div className="w-full flex flex-col gap-[3vmax] md:w-[70%] p-[2vmax]">
            <div className="flex gap-[1.5vmax] justify-center flex-wrap md:flex-nowrap bg-gray-50 p-[1vmax] rounded-[1vmax]">
              <img
                src={Book}
                alt=""
                className="h-[200px] w-[200px] border-2 border-gray-400 object-cover  rounded-lg"
              />

              <div className="flex flex-col gap-[1vmax]">
                <div className="text-[1.5vmax] font-semibold">
                  Virtual Mineral Box Identification Lab Kit, Properties of
                  Minerals Practice
                </div>
                <div className="text-[1vmax]">
                  Created by{" "}
                  <span className="text-blue-500 font-bold">
                    Brownkell Science{" "}
                  </span>
                </div>
                <div className="text-[1vmax]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  assumenda, libero ducimus nulla eveniet, quaerat iste corporis
                  velit provident ut ipsa dignissimos. Officiis.
                </div>
                <p className="text-[1vmax]">
                  Also included in:{" "}
                  <span className="text-blue-500">
                    Minerals Properties, Identification and Characteristics
                    Lessons Unit Bund{" "}
                  </span>
                </p>
                <button className="bg-red-400 text-[1.5vmax] w-fit p-[1vmin] px-[1vmax] rounded-full font-bold">
                  Remove
                </button>
              </div>

              <div className="flex md:flex-col gap-[2vmax] justify-start items-center">
                <div className="text-[2.5vmax]">$5.00</div>
                <div className="flex border-2 w-fit rounded-[1vmin]">
                  <div className="p-[1vmax] border-r-2 flex justify-center items-center">
                    1
                  </div>
                  <div>
                    <div className="border-b-2 p-1">+</div>
                    <div className="p-1">-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[1.5vmax] justify-center flex-wrap md:flex-nowrap bg-gray-50 p-[1vmax] rounded-[1vmax]">
              <img
                src={Book}
                alt=""
                className="h-[200px] w-[200px] border-2 border-gray-400 object-cover  rounded-lg"
              />

              <div className="flex flex-col gap-[1vmax]">
                <div className="text-[1.5vmax] font-semibold">
                  Virtual Mineral Box Identification Lab Kit, Properties of
                  Minerals Practice
                </div>
                <div className="text-[1vmax]">
                  Created by{" "}
                  <span className="text-blue-500 font-bold">
                    Brownkell Science{" "}
                  </span>
                </div>
                <div className="text-[1vmax]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  assumenda, libero ducimus nulla eveniet, quaerat iste corporis
                  velit provident ut ipsa dignissimos. Officiis.
                </div>
                <p className="text-[1vmax]">
                  Also included in:{" "}
                  <span className="text-blue-500">
                    Minerals Properties, Identification and Characteristics
                    Lessons Unit Bund{" "}
                  </span>
                </p>
                <button className="bg-red-400 text-[1.5vmax] w-fit p-[1vmin] px-[1vmax] rounded-full font-bold">
                  Remove
                </button>
              </div>

              <div className="flex md:flex-col gap-[2vmax] justify-start items-center">
                <div className="text-[2.5vmax]">$5.00</div>
                <div className="flex border-2 w-fit rounded-[1vmin]">
                  <div className="p-[1vmax] border-r-2 flex justify-center items-center">
                    1
                  </div>
                  <div>
                    <div className="border-b-2 p-1">+</div>
                    <div className="p-1">-</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="w-full md:w-[30%]">
            <div className="md:sticky top-0 h-fit flex flex-col gap-[1vmax] p-[2vmax] border-[1px] border-[#a0a0a0]">

              <div className="text-[2vmax]">Order Summary </div>
              <div className="text-[1.2vmax] flex justify-between">
                <div>Subtotal(1 items):</div>
                <div>$5.00</div>
              </div>
              <div className="w-full border-[1px] border-gray-400 "></div>
              <div className="text-[1.2vmax] flex justify-between">
                <div>Total:</div>
                <div>$5.00 USD</div>
              </div>
              <button className="bg-green-400 text-[1vmax] font-semibold p-[1vmax] px-[3vmax] rounded-full">
                Secure Checkout
              </button>
              <p className="text-[1vmax] text-center">Your purchased resources can be instantly downloaded from your TPT account</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
