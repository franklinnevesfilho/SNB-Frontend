import React from 'react';

function AddToCart({addToCart}) {
    return (
        <button onClick={addToCart} className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] p-[1vmax] px-[4vmax] rounded-full">
            Add to Cart
        </button>
    );
}

export default AddToCart;