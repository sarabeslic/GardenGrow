import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation.jsx'; // when default no need to use curly braces
import Home from './pages/homepage.jsx'; 
import Plants from './pages/plants.jsx'; 
import Details from './pages/details.jsx'; 
import MyFavorites from './pages/myGarden.jsx';
import Cart from './pages/cart.jsx';
import Try from './pages/try.jsx';

// Define your page components

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} /> 
          <Route path="/plants" element={<Plants/>} />
          <Route path="/myGarden" element={<MyFavorites/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile" element={<Try/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;