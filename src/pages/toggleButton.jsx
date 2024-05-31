import React from 'react';
import { useFavorites } from './FavoritesContext';
import { PiFlowerFill } from "react-icons/pi";


// FavoriteButton component that takes a productId as a prop
//check if the product is favorited or not and display the appropriate icon color

const FavoriteButton = ({ productId }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites[productId];

  return (
    <div
      onClick={() => toggleFavorite(productId)}
      className={`text-4xl hover:text-yellow-400 transition duration-300 opasity-100 ease-in-out ${isFavorited ? 'text-yellow-400' : 'text-black'}`}
    >
      <PiFlowerFill/>
    </div>
  );
};

export default FavoriteButton;


