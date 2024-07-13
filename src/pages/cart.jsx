import React, {useContext} from 'react';
import PRODUCTS from '../products';
import { ShopContext } from '../context/cartContext';
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";

function Cart() {
  const { cartItems, addToCart, removeFromCart, removeAllFromCart, totalProductsPrice } = useContext(ShopContext);
  const totalPPrice = totalProductsPrice();



  return (
    <section className='flex flex-col lg:flex-row justify-between sm:mx-36 mt-20'>
      {/** Display the cart items */}
      <section className='lg:w-2/4 flex flex-col'>
        <div className='bg-pink-100 p-4 sm:rounded-lg border-none shadow-md'>
          <h2 className='text-md font-semibold mb-4'>SHOPPING CART</h2>

          <div>
            {Object.keys(cartItems).map((productId) => { //loop through the cartItems object 
              
              const product = PRODUCTS.find((product) => product.id === parseInt(productId));//find the products whose id was added to the cart
              if (cartItems[productId] > 0) {
                return (
                  <div key={productId} className='flex items-center justify-between mb-4'>
                    <img src={product.pic} alt='Product' className='w-24 h-24 object-cover rounded m-3' />
                    <div className='ml-4'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                      <div className='flex items-center mt-2'>
                        {/** Display the quantity of the product in the cart and allow user to increase or decrease the quantity*/}
                      <button onClick={() => removeFromCart(productId)} className='bg-white text-yellow-500 px-2 py-1 rounded'>-</button>
                        <input type='text' value={cartItems[productId]} className='mx-2 w-12 text-center border border-yellow-500 rounded-md' />
                        <button onClick={()=>addToCart(productId)} className='bg-white text-yellow-500 px-2 py-1 rounded'>+</button>
                      </div>

                    </div>
                    <span className='ml-auto text-lg font-bold'>${product.price}</span>
                    <button onClick={()=>removeAllFromCart(productId)} className=' text-green-800 px-2 py-1 rounded'><CiCircleRemove className="text-2xl mr-3"/>
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/*Display the payment methods using icons*/}
        <div className='bg-pink-100 mt-11 p-4 sm:rounded-lg shadow-md'>

          <h2 className='text-md font-semibold mb-2'>Payment Methods</h2>
          <div className='flex justify-evenly text-4xl'>
            <MdOutlinePayment />
            <FaCcVisa/>
            <FaCcMastercard />
            <BsCreditCard2FrontFill />
          </div>
        </div>
      </section>

        {/** Display the summary using the totalPPrice from the context */}
      <section className='bg-pink-100 lg:w-2/5 p-4 h-64 sm:rounded-lg mt-11 mb-11 lg:mt-0 shadow-md'>
        <h2 className='text-md font-semibold mb-4'>SUMMARY</h2>
        <div className='flex justify-between mb-3'>
          <span>Products</span>
          <p>${totalPPrice}</p>
        </div>
        <div className='flex justify-between mb-6'>
          <span>Shipping</span>
          <span>$5</span>
        </div>
        <div className='flex justify-between font-bold mb-4'>
          <span>Total</span>
          <span>${totalPPrice + 5}</span>
        </div>
        <button className='bg-yellow-500 hover:bg-yellow-700 text-black py-2 px-4 mb-4 shadow-md transition duration-300 ease-in-out w-full'>
          CHECKOUT
        </button>
      </section>
    </section>
  );
}

export default Cart;
  
