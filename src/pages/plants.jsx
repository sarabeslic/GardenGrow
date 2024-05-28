import React, { useState } from 'react';
import PRODUCTS from "../products";
import { FaShoppingBasket } from "react-icons/fa";
import { PiFlowerFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import FilterBar from "./filter";



function Plants() {
  
  const [searchTerm, setSearchTerm] = useState('');

  const [filters, setFilters] = useState([]); // Initialize filters state with an empty array, while the FilterBar component will update this state with the selected filters

  const handleFilterChange = (newFilters) => {//pass the newFilters as a parameter to the handleFilterChange function
    setFilters(newFilters);
  };

  const applyFilters = (products, filters) => {

    return products.filter(product => { // Iterate over each product

      return filters.every(filter => {// Iterate over each filter and check if the product passes all filters
        if (filter.options.every(option => !option.checked)) { // If no options are checked, include the product
          return true; // No filter applied for this category
        }
        if (filter.id === 'price') {
          return filter.options.some(option => {
            if (option.checked) {
              const [min, max] = option.value.split('-').map(Number); // Split the option value by '-' and convert the strings to numbers
              return min <= product.price && product.price <= max || option.value === 'all';
            }
            return false;
          });
        }
        if (filter.id === 'color') {
          return filter.options.some(option => option.checked && option.value === product.color);
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
        return true;
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
            <FilterBar onFilterChange={handleFilterChange}/>  
        </section>

        <section className="flex flex-wrap justify-evenly m-16" style={{ flex: '1' }}>
        <section className="w-full mb-4 ml-16">
          <input 
            type='text' 
            placeholder='Search...' 
            onChange={event => setSearchTerm(event.target.value)} 
            className='p-2 w-42 bg-slate-300 border-none rounded-md items-end' 
          />
        </section>
        {filteredProducts.map((product) => (
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
    </section>
    
  );
}

export default Plants;