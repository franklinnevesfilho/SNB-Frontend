import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NavProfileBtn = ({ isOpened }) => {
    const[jwt] = useState(localStorage.getItem('JWT') || '')
    const navigate = useNavigate()
    const logout = () => {
            localStorage.removeItem('JWT')
    }
    useEffect(() => {
        if(jwt === ''){
            navigate("/")
        }
    }, []);
    return (
        <div className="flex gap-4 text-[1.2vmax] justify-center"> {/* Center the content */}
            <div className="flex items-center">
                <Link to={"/profile"}>
                    <img
                        src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
                        alt=""
                        className="h-[4vmax] rounded-full"
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/" onClick={logout} className={`font-bold font-[math] border-[1px] shadow-[0_0_5px_#a0a0a0] pt-[1vmin] p-[0.5vmin] px-[2vmax] text-orange-500 rounded-full
                    ${isOpened ? '' : `text-[1rem]`}`}>
                    LOGOUT
                </Link>
            </div>
        </div>
    );
}

export default NavProfileBtn;
