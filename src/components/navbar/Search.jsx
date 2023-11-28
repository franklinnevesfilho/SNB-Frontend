import React from 'react';
import {IoSearchOutline} from "react-icons/io5";

const Search = ({ id, onSearch }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(e.target.value);
        }
    };

    return (
        <>
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input
                id={id}
                type="text"
                placeholder="Search"
                className="ml-2 p-2 px-[1vmax] border-0 border-transparent
                outline-none flex-grow text-[1vmax]"
                onKeyDown={handleKeyPress}/>

            <div className="bg-green-300 w-fit h-fit p-3 rounded-full cursor-pointer"
                 onClick={() => document.getElementById(id).focus()}>
                <IoSearchOutline className="text-[1.5rem] font-bold" />
            </div>
        </>
    );
};

export default Search;