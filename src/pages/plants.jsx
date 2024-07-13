import React, { useState, useContext } from 'react';
import PRODUCTS from "../products";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import FilterBar from "./filter";
import FavoriteButton from "./toggleButton";
import { ShopContext } from "../context/cartContext";



function Plants() {
  
  const [searchTerm, setSearchTerm] = useState(''); // Initialize searchTerm state with an empty string, while the input field will update this state with the search term

  const [filters, setFilters] = useState([]); // Initialize filters state with an empty array, while the FilterBar component will update this state with the selected filters

  const handleFilterChange = (newFilters) => {//pass the newFilters as a parameter to the handleFilterChange function
    setFilters(newFilters);
  };
  const { addToCart } = useContext(ShopContext); // Destructure the addToCart function from the ShopContext to add products to the cart



  const applyFilters = (products, filters) => { // Create a function that filters the products based on the selected filters
    return products.filter(product => { // Iterate over each product

      return filters.every(filter => {// Iterate over each filter and check if the product passes all filters
        if (filter.options.every(option => !option.checked)) { // If no options are checked, include the product
          return true; // No filter applied for this category
        }
        if (filter.id === 'price') {
          return filter.options.some(option => {
            if (option.checked) {
              const [min, max] = option.value.split('-').map(Number); // Split the option value by '-' and convert the strings to numbers
              return min <= product.price && product.price <= max || option.value === 'all';// Return true if the product price is within the selected range or if the option value is 'all'
            }
            return false;
          });
        } 
      {/*checking for the other filters*/}
        if (filter.id === 'colour') {
          return filter.options.some(option => option.checked && option.value === product.colour);
        }
        if (filter.id === 'season') {
          return filter.options.some(option => option.checked && product.season === option.value);
        }
        if (filter.id === 'exposure') {
          return filter.options.some(option => option.checked && option.value === product.light);
        }
        if (filter.id === 'water') {
          return filter.options.some(option => option.checked && option.value === product.water);
        }
        return true; // No filter applied for this category
      });
    });
  };

    // Combine search and filter logic
    const filteredProducts = applyFilters(PRODUCTS, filters).filter(product => {
      if (searchTerm === '') {
        return true; // No search term, include all products
      }
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

//pass the handleFilterChange function as a prop to the FilterBar component
    return (
      <section className='flex flex-wrap justify-between'> 
          <section>
            <FilterBar onFilterChange={handleFilterChange}/>  {/*FilterBar component with the onFilterChange prop*/}
        </section>

        {/*search bar*/}
        <section className="flex flex-wrap justify-evenly m-16" style={{ flex: '1' }}>
        <section className="w-full flex justify-center sm:justify-start  mb-4 sm:ml-16">
          <input 
            type='text' 
            placeholder='Search...'  //placeholder text
            onChange={event => setSearchTerm(event.target.value)} 
            className='p-2 w-42 h-11 bg-slate-300 border-none rounded-md' 
          />
          {/* displaying all the products, and filtering them if they match the search term*/}

        </section>
        {filteredProducts.map((product) => (
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
              <FavoriteButton productId={product.id} /> {/*favorite button component from the toggleButton.jsx file to add products to the favorites list*/}
              </div>
            </div>
            <section className="bg-rose-100 px-2 rounded-b py-0 border border-black">
              <div className='flex justify-between -mb-2 mt-2'>
                <h3 className="text-lg">{product.name}</h3>
                <button onClick={()=>addToCart(product.id)}className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-1 rounded transition duration-300 ease-in-out">
                  <FaShoppingBasket className='text-2xl' /> {/* directly add the product to the cart by calling the addToCart function with the product ID as an argument*/}
                </button>
              </div>
              <p className="text-green-600 font-bold">${product.price}</p>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Plants;