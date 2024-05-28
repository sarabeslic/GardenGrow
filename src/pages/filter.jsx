import React, { Fragment, useState } from 'react';
import { MdWaterDrop } from 'react-icons/md';

function FilterBar({ onFilterChange}){ //pass the onFilterChange function as a prop to the FilterBar component
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
      id: 'colour',
      name: 'Colour',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'blue', label: 'blue', checked: false },
        { value: 'yellow', label: 'yellow', checked: false },
        { value: 'red', label: 'red', checked: false },
        { value: 'pink', label: 'pink', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id:'season',
      name: 'Season',
      options: [
        { value: 'spring', label: 'Spring', checked: false },
        { value: 'summer', label: 'Summer', checked: false },
        { value: 'autumn', label: 'Autumn', checked: false },
        { value: 'winter', label: 'Winter', checked: false },
      ],
    },
    {
      id:'exposure',
      name: 'Exposure',
      options: [
        { value: 'full sun', label: 'Full Sun', checked: false },
        { value: 'partial sun', label: 'Partial Sun', checked: false },
        { value: 'shade', label: 'Shade', checked: false },
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
    <div className='bg-rose-200 w-64 h-full p-2 pl-8'>
      <h2 className='font-bold text-center mt-6'>FILTERS</h2>

      {filters.map(filter => (
        <Fragment key={filter.id}>

          <h3 className='my-3 font-semibold text-sm'>{filter.name}</h3>
          {filter.id !== 'water' ? (

            filter.options.map((option, index) => (
              <div key={index} className='flex items-center mb-2'>
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleCheckboxChange(filter.id, index)}
                  className='mr-2 form-checkbox text-green-700' //to switch to green
                />
                <label className='text-sm'>{option.label}</label>
              </div>
            ))
          ) : ( //if the filter id is 'water', render the water drop icons
            <div className='flex flex-row justify-center'>

              {filter.options.map((option, index) => (
                <MdWaterDrop
                  key={index}
                  size={24}
                  color={option.checked ? 'blue' : 'grey'}
                  onClick={() => handleWaterClick(index)}
                  style={{ cursor: 'pointer', marginRight: '5px' }}
                />
              ))}
            </div>
          )}
        </Fragment> //fragment is used to group multiple children without adding extra nodes to the DOM
      ))}
    </div>
  );
};

export default FilterBar;