import React, { useContext } from 'react';
import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';//hook that returns the location object that represents the current URL.
import FavoriteButton from './toggleButton.jsx';
import Logic from './logicInfo.jsx';
import { ShopContext } from '../context/cartContext.jsx';



//the product is passed from the plants page to the details page through the location state!!
function Details({ productId}) {
    const location = useLocation()
    const { product } = location.state; //to use the product object in the details page we need to destructure it from the location state

    const { addToCart } = useContext(ShopContext);

    return (
        <>
            <Link to="/plants">
                <HiMiniArrowLeftCircle className="text-3xl text-emerald-900 ml-10 mt-5" />
            </Link>
            <div className='flex-col justify-center items-center  my-10 mx-10 md:mx-40'> 
                <div className='flex flex-row justify-between mb-10'>
                    <h1 className='text-xl '>{product.name.toUpperCase()}</h1>
                    <FavoriteButton productId={product.id} /> {/*just like in the myGarden page, we can add the product to the favorites list from here directly*/}
                </div>

                <div className='detailsTogether'>
                    <section className='imageDetails md:mr-36'>
                        <img src={product.pic} />
                    </section>
                    <section className='textDetails'>
                        <h2 className="text-lg font-semibold pb-3">DETAILS</h2>
                        <p className="text-m">{product.text}</p>
                        <Logic key={product.id} light={product.light} water={product.water} /> {/*display the light and water requirements of the product using the Logic component*/}

                        <button onClick={()=>addToCart(product.id)} className='bigButton bg-amber-400  hover:bg-yellow-700 transition ease-in-out duration-300'>Add to Cart<span className="ml-5">${product.price}</span></button>
                    </section> {/*directly add the product to the cart by calling the addToCart function from the context with the product ID as an argument*/}
                </div>  
                
            </div>
        </>
    )
};

export default Details;
