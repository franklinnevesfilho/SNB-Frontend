import { useState } from "react";
import Image from "../assets/signupimg.png";
import { BiSolidLock, BiSolidUserDetail} from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = ({ apiCall }) => {
  const [togglePass, setTogglePass] = useState(false);
  const [toggleConPass, setToggleConPass] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const registrationRequest = () => {
    apiCall(
      "/auth/register",
      "POST",
      { "Content-Type": "application/json" },
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
      },
      (r) => {
        console.log(r);
        if (r.node.errors.length === 0) {
          alert("Registration Successful");
        } else {
          alert("Registration Failed");
        }
      },
      (e) => {
        console.log(e);
      }
    );
  };

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[25%] relative flex flex-col items-center">
          <div className="w-full h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-12%] flex flex-col items-center justify-end gap-2">
            <img src={Image} className="h-full" alt="" />
          </div>
        </div>

        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] pt-[1vmax]">
          <div className="text-[2.5vmax] font-[800] mb-1"> Sign Up </div>


        {/* Add Firstname , lastname and date of birth block start here ---------------------- */}

          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <BiSolidUserDetail className="text-[1.7vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstname}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <BiSolidUserDetail className="text-[1.7vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastname}
            />
          </div>
          <div className="flex gap-2 rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <IoIosMail className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax]  px-4">
            <BiSolidLock className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type={`${togglePass ? "text" : "password"}`}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            {togglePass ? (
              <AiFillEye
                onClick={() => {
                  setTogglePass(false);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  setTogglePass(true);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            )}
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax]  px-4">
            <BiSolidLock className="text-[2vmax] text-slate-400" />
            <input
              className={`flex-grow border-none bg-transparent outline-none ${conPassword === password ? "text-green-500" : "text-red-500"}`}
              type={`${toggleConPass ? "text" : "password"}`}
              placeholder="Retype Password"
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
              value={conPassword}
            />
            {toggleConPass ? (
              <AiFillEye
                onClick={() => {
                  setToggleConPass(false);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  setToggleConPass(true);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            )}
          </div>

          <button onClick={registrationRequest} className="w-full card-gradient
          font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.4vmax]">
            SignUp
          </button>

          <Link to="/" className="text-blue-600 font-bold
          text-center text-xs md:text-sm lg:text-base 2xl:text-lg">
            {" "}
            Already Have an Account ? Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
