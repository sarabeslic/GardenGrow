import React from "react";
import PRODUCTS from "../products";


function ProductList({ filters }) { //pass the filters as a prop to the ProductList component

    const applyFilters = (products, filters) => {
        return products.filter(product => {

        return filters.every(filter => {
            if (filter.id === 'price') {
            return filter.options.some(option => {
                if (option.checked) {
                const [min, max] = option.value.split('-').map(Number);
                return (min <= product.price && product.price <= max) || option.value === 'all';
                }
                return false;
            });
            }
            if (filter.id === 'colour') {
            return filter.options.some(option => option.checked && option.value === product.colour);
              }
            if (filter.id === 'season') {
            return filter.options.some(option => option.checked && product.value=== product.season);
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
    
    const filteredProducts = applyFilters(PRODUCTS, filters); //pass the filters
    
}
export default ProductList;