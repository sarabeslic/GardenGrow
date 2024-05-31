import React, { createContext, useState } from "react";
import PRODUCTS from "../products";


const ShopContext = createContext(null); // Create a context object to store the cart items


const getDefaultCart = () => { // Create a function to initialize the cart with 0 quantity for each product
    let cart={}
    for (let i=1; i<PRODUCTS.length + 1; i++) {//start from 1 because the first product has an id of 1, so +1 to the length of the products array
        cart[i]=0;
    }
    return cart;
};


function ShopContextProvider({children}) { 

    //inical state is the default cart with 0 quantity for each product
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //functions to add, remove and remove all from the cart

    const addToCart = (productId) => {
        setCartItems((prev) => {return {...prev,[productId]: prev[productId] + 1};
        });
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => {return {...prev,[productId]: prev[productId] - 1}; // Decrease the quantity by 1 for the specified productId
        });
    }
    
    const removeAllFromCart = (productId) => {
        setCartItems((prev) => ({
            ...prev,
            [productId]: 0, // Set the quantity to 0 for the specified productId
        }));
    };

    const totalProductsPrice = () => { // Calculate the total price of all products in the cart
        let total = 0;
        Object.keys(cartItems).forEach((productId) => { 
          const product = PRODUCTS.find((p) => p.id === parseInt(productId)); //(p) is the product in the array of products 
          total += cartItems[productId] * product.price;
        });
        return total;
      };

    //context value that needs to be passed to the provider
    const contextValue = {cartItems,addToCart,removeFromCart,removeAllFromCart, totalProductsPrice};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export {ShopContextProvider, ShopContext};