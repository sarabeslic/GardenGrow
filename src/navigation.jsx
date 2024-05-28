import React from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  // Define an array containing objects with text and link properties
  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Plants', link: '/plants' },
    { text: 'My Garden', link: '/myGarden' },
    { text: <HiShoppingBag className='text-3xl' />, link: '/cart' },
    { text: <CgProfile className='text-3xl'/>, link: '/profile'}
  ];

  return (
    <nav className='header'>
      <ul className='nav'>
        <h1 className='logo'>GardenGrow</h1>

        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
