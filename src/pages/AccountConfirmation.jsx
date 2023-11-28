import { useEffect} from "react";
import Image from "../assets/signupimg.png";
import { Link } from "react-router-dom";

const AccountConfirmation = ({ apiCall }) => {
    // Extracting tokenId from URL parameter
    const tokenId = new URLSearchParams(window.location.search).get("tokenId");

    useEffect(() => {
        // Check if tokenId is truthy before making the API call
        if (tokenId) {
            apiCall(
                `auth/confirm-account?tokenId=${tokenId}`,
                "GET",
                { "Content-Type": "application/json" },
                {},
                (r) => {
                    console.log(r);
                    if (r.node.errors.length === 0) {
                        console.log("Registration Successful");
                    } else {
                        console.log("Registration Failed");
                    }
                },
                (e) => {
                    console.log(e);
                }
            );
        }
    }, [apiCall, tokenId]); // Include tokenId as a dependency

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

                <form className="w-[80%] flex-grow flex text-center flex-col gap-2 md:gap-[1.5vmin] pt-[1vmax]">
                    <div className="text-[2.5vmax] font-[800] mb-1 "> Account Confirmed!</div>
                    <Link to={"/"} className="w-full card-gradient
                        font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.4vmax]">
                        Log In
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AccountConfirmation;

