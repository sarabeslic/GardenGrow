import React from "react";
import MyGardenBlog from "./MyGardenBlog";
import { useState, useEffect } from 'react';
import BottomNav from "./bottomNav";
import { Link } from "react-router-dom"; //neessarry for the link to work


function Home(){
    const [imageIndex, setImageIndex] = useState(0); //state for image rotation
    const images = ['/pics/garden.jpg', '/pics/Shib.jpg', '/pics/gardenNight.jpg'];

    useEffect(() => { //rotate images every 8 seconds
        const intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000); 

        return () => clearInterval(intervalId); //clear interval to prevent memory leak
    }, [images]);



    return (
        <> {/*main image with the shop now button*/}
        <section className="relative">
            <img src="/pics/mainImg.jpg" className="h-96 w-full object-cover md:w-full bg-white md:opacity-85" alt="Main Image" />
            <div className="absolute inset-0 flex flex-col items-center justify-evenly text-emerald-1000 mt-20" >
                <button className="fleur-de-leah-regular text-5xl lg:text-7xl xl:text-8xl w-2/3 text-center">Grow your garden</button>
                <Link to="/plants">
                <button className="mt-6 bg-amber-400 hover:bg-amber-600 transition duration-300 ease-in-out-font-semibold py-3 px-4 w-52 z-10 shadow-xl">SHOP NOW</button>
                </Link>
            </div>

        </section> {/*blog section with the images rotating*/}
        <p className='text-center font-semi pt-10'>GET INSPIRED...</p>
        <section className="mt-3 h-128 text-lg bg-rose-100 shadow-md border-b-2 border-gray-300">
        <div className="flex flex-row justify-between px-10 md:pr-40 pl-0 ">
            <div className="blogImage hidden md:block "> 
                <img src={images[imageIndex]} alt="images"  /> {/*getting images from states*/}
            </div>
            <div className="flex-1 pl-6">
                <MyGardenBlog/> {/*blog component*/}
            </div>
        </div>
    </section>
                {/*team section with the images of the team members*/}
    <article className='team flex flex-col justify-between my-10 mx-10 text-lg relative md:mx-40 md:flex-row'>
        <div className='flex-shrink-0 flex-grow-0  md:w-2/3 md:mr-4'>
            <p>TEAM AND OUR MISSION</p>
            <p>Welcome to GardenGrow, where we believe in cultivating joy and connection through the beauty of nature. Our mission is to inspire and empower gardeners of all levels to create thriving green spaces that nourish the soul and environment alike.</p>
            <p>We're more than just a seed shop. We're your partners in growth, providing hand-selected seeds of the highest quality and expert guidance to help you bring your garden dreams to life. Whether you're a seasoned gardener or just starting out, we're here to support you every step of the way</p>
            <p>With a focus on sustainability and biodiversity, we offer a curated selection of seeds for a variety of flowers and plants. From vibrant blooms to delicious herbs, our diverse range ensures there's something for every garden and gardener.</p>
            <p>Join us in our mission to cultivate beauty, foster community, and nurture the planet. Let's grow together.</p>
        </div>
        <div className="teamMembers">
            <div>
                <p>NICOLETA DUBLEA</p>
                <img src='/pics/lily.jpg' alt="Nicoleta Dublea" /> 
            </div>
            <div>
                <p>SARA BEŠLIĆ</p>
                <img src='/pics/daisy.jpg' alt="Sara Bešlić" /> 
            </div>
        </div>
    </article>

    <section className='bg-amber-400 w-full h-10 pt-5 mt-5'>
        <BottomNav /> {/*bottom navigation component*/}
    </section>
        </>
    );
}

export default Home;

