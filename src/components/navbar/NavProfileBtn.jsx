import React from 'react';
import { Link } from 'react-router-dom';

function NavProfileBtn({ isOpened }) {
    return (
        <div className="flex gap-4 text-[1.2vmax] justify-center"> {/* Center the content */}
            <div className="flex items-center">
                <img
                    src="https://ecdn.teacherspayteachers.com/thumbuserhome/Tchrbrowne-1695812351/6656.jpg"
                    alt=""
                    className="h-[4vmax] rounded-full"
                />
            </div>
            <div className="flex items-center">
                <Link
                    to="/login"
                    className={`font-bold font-[math] border-[1px] shadow-[0_0_5px_#a0a0a0] pt-[1vmin] p-[0.5vmin] px-[2vmax] text-orange-500 rounded-full
                    ${isOpened ? '' : `text-[1rem]`}`}>
                    Profile
                </Link>
            </div>
        </div>
    );
}

export default NavProfileBtn;
