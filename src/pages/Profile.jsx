import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";

const Profile = ({ apiCall }) => {
    const [jwt] = useState(localStorage.getItem("JWT") || "");
    const [userData, setUserData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        license: "N/A",
        twoFactorEnabled: false,
        authorities: [
            {
                authority: "USER"
            }
        ],
        profile: null, // Updated to use null initially
    });

    const [twoFactorEnabled, setTwoFactorEnabled] = useState(userData.twoFactorEnabled);

    const handlePictureChange = (e) => {
        // Handle the picture change and update the state
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // convert to base64 for storage
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            // send to server
            apiCall(
                '/user/update-profile-picture',
                'POST',
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                {"picture": base64String},
                (r) => {
                    console.log(r);
                },
                (e) => {
                    console.log(e);
                }
            );
        };
    };
    const getUser = () => {
        apiCall(
            '/user',
            'GET',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            {},
            (r) => {
                console.log(r);
                setUserData(r.node);
                setTwoFactorEnabled(r.node.twoFactorEnabled);
            },
            (e) => {
                console.log(e)
            }
        );
    }

    const toggleTwoFactor = () => {
        // Toggle the 2FA status
        const newTwoFactorStatus = !twoFactorEnabled;
        setTwoFactorEnabled(newTwoFactorStatus);

        // Update the 2FA status on the server
        apiCall(
            '/user/update-2fa-status/'+newTwoFactorStatus,
            'GET',
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            {},
            (r) => {
                console.log(r);
                setUserData(r.node);
            },
            (e) => {
                console.log(e);
            }
        );
    };

    useEffect(() => {
        getUser();
    }, []);

    // Move the initialization of twoFactorEnabled here
    useEffect(() => {
        setTwoFactorEnabled(userData.twoFactorEnabled);
    }, [userData]);
    return (
        <>
            <Navbar/>
            <div className="w-[90%] m-auto mt-8 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-center md:items-start md:mr-8">
                    <img
                        src={userData.profile ? `data:image/png;base64,${userData.profile}` : ''}
                        alt="Profile Picture"
                        className="rounded-full h-50 w-50 mb-4"
                    />
                    <h2 className="text-2xl font-bold">{userData.firstName + " " + userData.lastName}</h2>
                </div>

                <div className="mt-8 md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <p className="text-gray-700">Email: {userData.email}</p>
                    <p className="text-gray-700">Drivers
                        License: {userData.license === '' ? userData.license : "N/A"}</p>
                </div>
            </div>

            <div className="text-center mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Edit Picture button */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePictureChange}
                    className="hidden"
                    id="pictureInput"
                />
                <label
                    htmlFor="pictureInput"
                    className="bg-gray-500 text-white p-2 text-sm font-bold rounded-full cursor-pointer"
                >
                    Edit Picture
                </label>

                {/* 2FA toggle switch */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="hidden"
                        id="toggle2FA"
                        checked={userData.twoFactorEnabled} // Assuming you have a state for 2FA status
                        onChange={toggleTwoFactor} // Assuming you have a function to toggle 2FA
                    />
                    <label
                        htmlFor="toggle2FA"
                        className="cursor-pointer bg-gray-300 w-14 h-7 rounded-full p-1 transition-colors duration-300 ease-in-out"
                    >
                        <div
                            className={`${
                                twoFactorEnabled ? 'translate-x-7 bg-blue-500' : 'translate-x-0 bg-white'
                            } w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
                        ></div>
                    </label>
                    <span className="ml-2">Enable 2FA</span>
                </div>
            </div>
        </>
    );
}

export default Profile;
