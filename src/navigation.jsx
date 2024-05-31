import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { Menu } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  // Define an array containing objects with text and link properties
  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Plants', link: '/plants' },
    { text: 'My Garden', link: '/myGarden' },
    { text: <HiShoppingBag className='text-3xl' />, link: '/cart' },
    { text: <CgProfile className='text-3xl' />, link: '' }
  ];

  return (
    <nav className='header'>
      <div className='flex justify-between items-center p-4 mx-14'>
        <h1 className='logo text-2xl font-bold'>GardenGrow</h1>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex space-x-8'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button className="focus:outline-none">
                  {open ? (
                    <IoMdClose className="text-3xl" />
                  ) : (
                    <FiMenu className="text-3xl" />
                  )}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-pink-100 border rounded-md shadow-lg z-10">
                  {navItems.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <Link
                          to={item.link}
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                        >
                          {item.text}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

