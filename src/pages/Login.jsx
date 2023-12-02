import {useEffect, useState} from "react";
import Image from "../assets/loginimg.png";
import { BiSolidLock, BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";

const Login = ({apiCall}) => {
  const navigate = useNavigate();
  const [togglePass, setTogglePass] = useState(false);
  const [errors, setErrors] = useState([]);
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [hasErrors, setHasErrors] = useState(false)

  const clearCredentials = () => {
    setEmail("")
    setPassword("")
  }
  const loginRequest = (e) => {
    e.preventDefault();
    console.log("Entered Request");

    apiCall(
        '/auth/login',
        'POST',
        { 'Content-Type': 'application/json' },
        { email, password },
        (r) => {
          console.log(r);

          if(r.errors.length === 0 && r.node.jwt !== ""){
            localStorage.setItem("JWT", r.node.jwt);
            if(r.node.twoFactorEnabled){
                navigate("/two-factor-auth")
            }else{
              navigate("/home");
            }
          }else{
            clearCredentials()
            setErrors(r.errors)
          }
        },
        (e) => {
            console.log(e);
        }
        );
  }
  useEffect(() => {
    setHasErrors(errors.length > 0)
  }, [errors])
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[55%] relative flex flex-col items-center">
          <div className="w-full h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-8%] flex flex-col items-center justify-end gap-2 m-8">
            <div className="font-bold text-center text-white text-[2vmax]">
              Welcome Back
            </div>
            <img src={Image} className="w-[90%]" alt="" />
          </div>
        </div>
        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] 2xl:gap-[2vmin] pt-[1.5vmax]">
          <div className={`flex gap-2 rounded-full p-2 md:p-[0.6max] pl-4 ${hasErrors ? 'bg-red-500':'bg-slate-100'}`}>
            <BiUserCircle className={`text-[2vmax] ${hasErrors ? 'text-black-400':'text-slate-400'}`} />
            <input
              className={`bg-transparent flex-grow border-none outline-none ${hasErrors > 0 ? 'placeholder-black':''}`}
              type="text"
              placeholder="Email"
              onChange={(e)=> { setEmail(e.target.value) }}
              value={email}
            />
          </div>
          <div className={`flex gap-2 rounded-full p-2 md:p-[0.6max] pl-4 ${hasErrors ? 'bg-red-500':'bg-slate-100'}`}>
            <BiSolidLock className={`text-[2vmax] ${hasErrors ? 'text-black-400':'text-slate-400'}`} />
            <input
              className={`flex-grow border-none bg-transparent outline-none ${hasErrors > 0 ? "" : "text-red-500"}`}
              type={`${togglePass ? "text" : "password"}`}
              placeholder="Password"
              onChange={(e)=> { setPassword(e.target.value) }}
              value={password}
            />
            {togglePass ? (
              <AiFillEye
                onClick={() => {
                  setTogglePass(false);
                }}
                className={`text-lg md:text-[1.5vmax] ${hasErrors ? 'text-black-400':'text-slate-400'}`}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  setTogglePass(true);
                }}
                className={`text-lg md:text-[1.5vmax] ${hasErrors ? 'text-black-400':'text-slate-400'}`}
              />
            )}
          </div>

          <div className="flex flex-col items-center mb-1 ">
            <Link to="/forgot-password"
                  className="text-blue-600 font-bold text-xs
                    md:text-sm lg:text-base 2xl:text-lg ">
              Forgot Password?
            </Link>
          </div>
          <button onClick={loginRequest}
                  className="w-full font-bold text-white
                  text-[1.3vmax] rounded-full p-3 md:p-[0.8vmax] card-gradient">
            Login
          </button>

          <Link to="/signup"
                className="text-blue-600 font-bold text-center
                  text-xs md:text-sm lg:text-base 2xl:text-lg">
            Don't Have an Account ? Sign Up
          </Link>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
