import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa'; 
import { useFavorites } from './FavoritesContext';
import PRODUCTS from '../products'; 
import FavoriteButton from './toggleButton';


function MyFavorites() {
  const { favorites } = useFavorites(); // Destructure the favorites object from the useFavorites hook

  // Filter the PRODUCTS array to include only the favorited products
  const favoriteProducts = PRODUCTS.filter(product => favorites[product.id]);

  return (
    <section className="flex flex-wrap justify-evenly m-16"  style={{ flex: '1' }}>
      <section className="w-full flex justify-center items-center mb-6 mt-0 font-bold">
        <h1 className='favourites'>YOUR FAVOURITES</h1>
      </section>

      {/** Display the favorite products */}
      {favoriteProducts.map((product) => (
        <div key={product.id} className="w-72 h-auto mb-10 sm:mb-36 relative">
          <Link to='/details' state={{ product }}>
            <div className="relative h-0 overflow-hidden rounded-t" style={{ paddingTop: "80%" }}>
              <img
                src={product.pic}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
              />
            </div>
          </Link>
          <div className="absolute top-0 right-0 mt-2 mr-2 p-1 rounded-full" style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)'}}>
              <div className='opacity-100'>
              <FavoriteButton productId={product.id} /> {/*user still can remove the product from the favorites list from here directly*/}
              </div>
            </div>
          <section className="bg-rose-100 px-2 rounded-b py-0 border border-black">
            <div className='flex justify-between -mb-2 mt-2'>
              <h3 className="text-lg">{product.name}</h3>
              <div className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-1 rounded transition duration-300 ease-in-out">
                <FaShoppingBasket className='text-2xl' />
              </div>
            </div>
            <p className="text-green-600 font-bold">${product.price}</p>
          </section>
        </div>
      ))}
    </section>
  );
}

export default MyFavorites;