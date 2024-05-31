import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  // an array containing objects with text and link properties
  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Plants', link: '/plants' },
    { text: 'My Garden', link: '/myGarden' }
  ];

//returning the navItems array as a list of links to the respective pages  
  return (
    <nav className='headerdown'>
      <ul className='nav'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
