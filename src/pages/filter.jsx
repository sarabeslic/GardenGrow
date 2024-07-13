import React, { Fragment, useState } from 'react';
import { MdWaterDrop } from 'react-icons/md';
import { MdFilterList } from 'react-icons/md';
import { TbFilterSearch } from "react-icons/tb";

//make filters as object with id, name and options properties stored in an array and set as the initial state
function FilterBar({ onFilterChange}){ //pass the onFilterChange function as a prop to the FilterBar component
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [filters, setFilters] = useState([
    {
      id: 'price',  
      name: 'Price',
      options: [
        { value: '1-5', label: '1$ -5$', checked: false },
        { value: '6-10', label: '6$ -10$', checked: false },
        { value: '11-15', label: '11$ -15$', checked: false },
        { value: '16-20', label: '16$ -20$', checked: false },
        { value: 'all', label: 'All', checked: false },
      ],
    },
    {
      id:'season',
      name: 'Season',
      options: [
        { value: 'spring', label: 'spring', checked: false },
        { value: 'summer', label: 'summer', checked: false },
        { value: 'autumn', label: 'autumn', checked: false },
        { value: 'winter', label: 'winter', checked: false },
        { value: 'year-round', label: 'year-round', checked: false}
      ],
    },
    {
      id:'exposure',
      name: 'Exposure',
      options: [
        { value: 'full sun', label: 'full sun', checked: false },
        { value: 'partial shade', label: 'partial shade', checked: false },
        { value: 'shade', label: 'shade', checked: false },
      ],
    },
    {
      id: 'colour',
      name: 'Colour',
      options: [
        { value: 'orange', label: 'orange', checked: false },
        { value: 'blue', label: 'blue', checked: false },
        { value: 'turquoise', label: 'turquoise', checked: false },
        { value: 'red', label: 'red', checked: false },
        { value: 'pink', label: 'pink', checked: false },
        { value: 'purple', label: 'purple', checked: false },
        { value: 'yellow', label: 'yellow', checked: false },
        { value: 'white', label: 'white', checked: false },
        {value:'multiple', label:'multiple', checked: false}
      ],
    },
    {
      id: 'water',
      name: 'Water',
      options: [
        { value: 'weekly', checked: false },
        { value: 'few days', checked: false },
        { value: 'daily', checked: false },
      ],
    },
  ]);

//function to handle the checkbox change event, just the visual not the actual filtering
  const handleCheckboxChange = (filterId, optionIndex) => {

    const updatedFilters = filters.map(filter => {
      if (filter.id === filterId) { //if the filter id matches the filterId passed to the function
        const updatedOptions = filter.options.map((option, index) => {
          if (index === optionIndex) { //if the index of the option matches the optionIndex passed to the function
            return {
              ...option, //return a new object with the same properties as the option and the checked property inverted
              checked: !option.checked 
            };
          }
          return option;
        });
        return {
          ...filter, //return a new object with the same properties as the filter and the options property set to the updatedOptions array
          options: updatedOptions
        };
      }
      return filter;
    });
    setFilters(updatedFilters); 
    onFilterChange(updatedFilters); //call the onFilterChange function with the updated filters
  };


//same but for the water drop icons
  const handleWaterClick = (optionIndex) => {
    const updatedFilters = filters.map(filter => {
      if (filter.id === 'water') {
        const updatedOptions = filter.options.map((option, index) => ({
          ...option,
          checked: index <= optionIndex, //set the checked property to true if the index is less than or equal to the optionIndex
        }));
        return {
          ...filter,
          options: updatedOptions,
        };
      }
      return filter;
    });
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };


  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-30 left-4 z-5 text-green-900 p-2 rounded"
        onClick={toggleMenu}
      >
        <TbFilterSearch size={26}/></button>

      {/* Curtain Menu for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-rose-100 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:w-72 p-2 sm:pl-8`}
      >
        {/* Close Button for Mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-700" onClick={toggleMenu}
        >X
        </button>

        <h2 className="font-bold text-center mt-6">FILTERS</h2>

        {/* Map through the filters array and render the filter name and options */}
        {filters.map((filter) => (
          <Fragment key={filter.id}>
            <h3 className="my-3 ml-6 font-semibold text-sm">{filter.name}</h3>
            {filter.id !== 'water' ? (
              filter.options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange(filter.id, index)}
                    className="ml-8 mr-3 form-checkbox text-green-700" // To switch to green
                  />
                  <label className="text-sm">{option.label}</label>
                </div>
              ))
            ) : (
              // If the filter id is 'water', render the water drop icons
              <div className="flex flex-row justify-center">
                {filter.options.map((option, index) => (
                  <MdWaterDrop
                    key={index}
                    size={24}
                    color={option.checked ? 'blue' : 'grey'} // If the option is checked, set the color to blue, otherwise grey
                    onClick={() => handleWaterClick(index)}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                  />
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default FilterBar;
