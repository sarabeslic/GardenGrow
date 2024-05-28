import React from 'react';
import { PiFlowerFill } from "react-icons/pi";
import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import { Link, useParams, useLocation } from 'react-router-dom';//hook that returns the location object that represents the current URL.
import ToggleButton from './toggleButton.jsx';
import Logic from './logicInfo.jsx';

function Details() {
    const location = useLocation()
    const { product } = location.state //destructuring the product from the location state

 
    return (
        <>
            <Link to="/plants">
                <HiMiniArrowLeftCircle className="text-3xl text-emerald-900 ml-10 mt-5" />
            </Link>
            <div className='flex-col justify-center items-center  my-10 mx-20 md:mx-40'> 
                <div className='flex flex-row justify-between mb-10'>
                    <h1 className='text-xl '>{product.name.toUpperCase()}</h1>
                    <ToggleButton />
                </div>

                <div className='detailsTogether'>
                    <section className='imageDetails'>
                        <img src={product.pic} />
                    </section>
                    <section className='textDetails'>
                        <h2 className="text-lg font-semibold pb-3">DETAILS</h2>
                        <p className="text-m">{product.text}</p>
                        <Logic key={product.id} light={product.light} water={product.water} />
                        <button className='bigButton bg-amber-400'>Add to Cart</button>

                    </section>       
                </div>  
                
            </div>
        </>
    )
};

export default Details;
