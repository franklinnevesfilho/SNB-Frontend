// OtpPage.js
import Image from "../assets/loginimg.png";
import React, { useState } from "react";
import {BiKey} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";

const TwoAuthPage = ({ apiCall}) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [hasErrors, setHasErrors] = useState(false); // Adjust this as needed

    const submitOtp = (e) => {
        e.preventDefault();

        // Validate OTP (you may want to add more validation logic)
        if (otp.trim() === "") {
            setHasErrors(true);
            return;
        }

        // Call your API to verify the OTP
        // Replace the following line with your actual API call
        apiCall(
            '/auth/verify-otp/'+otp,
            'GET',
            { 'Content-Type': 'application/json' },
            { },
            (r) => {
                console.log(r);
                if(r.node.errors.length === 0) {
                    localStorage.setItem("JWT", r.node.jwt);
                    navigate("/home");
                }
            },
            (e) => {
                console.log(e);
                setHasErrors(true);
                // Handle unsuccessful OTP verification
                // Example: Display an error message, reset OTP field, etc.
            }
        );
    };

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
                        <BiKey className={`text-[2vmax] ${hasErrors ? 'text-black-400':'text-slate-400'}`} />
                        <input
                            className={`bg-transparent flex-grow border-none outline-none ${hasErrors > 0 ? 'placeholder-black':''}`}
                            type="text"
                            placeholder="Enter OTP"
                            onChange={(e) => { setOtp(e.target.value) }}
                            value={otp}
                        />
                    </div>

                    {/* Display error message if needed */}
                    {hasErrors && (
                        <div className="text-red-500 text-sm">Invalid OTP. Please try again.</div>
                    )}

                    <button onClick={submitOtp}
                            className="w-full font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.8vmax] card-gradient">
                        Submit OTP
                    </button>
                    <div className="flex flex-col items-center mb-1 ">
                        <Link to="/" className="text-blue-600 font-bold text-x md:text-sm lg:text-base 2xl:text-lg ">
                            Back to sign-in
                        </Link>
                    </div>
                </form>
                {/* </div> */}
            </div>
        </div>
    );
};

export default TwoAuthPage;
