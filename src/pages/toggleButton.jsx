import React, { useState } from 'react';
import { PiFlowerFill } from "react-icons/pi";
import product from '../products';



function ToggleButton() {
    const [color, setColor] = useState('black');

    
    const toggleColor = () => {
        // Toggle the color between black and yellow
        setColor((prevColor) => {
            const newColor = prevColor === 'black' ? 'yellow' : 'black';
            console.log('my new color ' + newColor);
            
            // Update the product.favorite based on the new color
            const updatedProduct = { ...product, favorite: newColor === 'yellow' };
            console.log(updatedProduct.favorite);
            
            return newColor;
        });
    };
    
    return (
        <button className=" py-1 px-1" onClick={toggleColor}>
            <PiFlowerFill className={`text-4xl "hover:text-yellow-400 bg-opacity-60 transition duration-300 ease-in-out ${color === 'black' ? 'text-black' : 'text-yellow-400'}`}/>
        </button>
    );
} 

export default ToggleButton;