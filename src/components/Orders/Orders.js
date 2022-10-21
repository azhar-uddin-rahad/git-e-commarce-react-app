import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../Shopping/ReviewItem/ReviewItem';

const Orders = () => {
  const {products,initialCart} = useLoaderData();
  const [cart, setCart] =useState(initialCart)
  const clearCard=()=>{
    setCart([]);
    deleteShoppingCart ();

   }

  const handleRemoveItem =(id)=> {
     const remeaningIteam= cart.filter(product => product.id !== id);
     setCart(remeaningIteam);
     removeFromDb(id)
  }
    return (
        <div className='container'>
          <div className='products-container '>
            {
              cart.map(product => <ReviewItem key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
              ></ReviewItem> )
            }
            {

              cart.length === 0 && <h2>Please First <Link to="/">select Your odrder</Link></h2>
            }

          </div>
          <div className='cart-container'>
          <Cart clearCard={clearCard} cart={cart}>

           

          </Cart>
          </div>
           
        </div>
    );
};

export default Orders;