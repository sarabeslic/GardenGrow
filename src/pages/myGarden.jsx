import React from 'react';
import PRODUCTS from '../products';
import { FaShoppingBasket } from 'react-icons/fa';
import { PiFlowerFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';


function MyFavorites() {

    return (
        
        <section className="flex flex-wrap justify-evenly m-16" mt- style={{ flex: '1' }}>
        <section className="w-full flex justify-center items-center mb-6 mt-0 font-bold ">
          <h1 className='favourites'>YOUR FAVOURITES</h1>
        </section>
                {PRODUCTS.map((product) => (
                <div key={product.id} className="w-72 h-52 mb-36 relative">
                    <Link to='/details' state={{ product }}>
                    <div className="relative h-0 overflow-hidden rounded-t" style={{ paddingTop: "80%" }}>
                        <img
                        src={product.pic}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
                        />
                        <div>
                        <button className="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400 hover:text-yellow-400 bg-opacity-60 transition duration-300 ease-in-out text-black py-1 px-1 rounded-full">
                            <PiFlowerFill className="text-4xl" />
                        </button>
                        </div>
                    </div>
                    </Link>

                    <section className="bg-rose-100 px-2 rounded-b py-0 border border-black">
                    <div className='flex justify-between -mb-2 mt-2'>
                        <h3 className="text-lg">{product.name}</h3>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-1 rounded transition duration-300 ease-in-out">
                        <FaShoppingBasket className='text-2xl' />
                        </button>
                    </div>
                    <p className="text-green-600 font-bold">${product.price}</p>
                    </section>
                </div>
                ))}
        </section>
 );
}

export default MyFavorites;