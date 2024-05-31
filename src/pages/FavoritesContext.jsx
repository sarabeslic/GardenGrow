import React, { createContext, useContext, useState, useEffect } from 'react';
import PRODUCTS from '../products';


const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  // Initialize state with default favorite values

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites'); // Retrieve favorites from localStorage
    if (savedFavorites) {                                    // If favorites exist in localStorage, parse the JSON string
      return JSON.parse(savedFavorites);
    } else {
      // Initialize with all products set to false
      const initialFavorites = {};
      PRODUCTS.forEach(product => {                  // Iterate over each product and set the id as the key and the value as false             
        initialFavorites[product.id] = false;
      });
      return initialFavorites;
    }
  });

  // Save favorites to localStorage whenever they change using the useEffect hook!!
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite function to update the favorite state, if user clicks on the favorite button
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  console.log(favorites);
//pass the favorites and toggleFavorite function to the FavoritesContext.Provider component to make them available to all child components

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
