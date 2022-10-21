import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css';



const Shopping = () => {
    const products=useLoaderData();
   
   const [cart,setCart]=useState([]);

   const clearCard=()=>{
    setCart([]);
    deleteShoppingCart ();

   }

   
   useEffect(()=>{
    const storedCart= getStoredCart();
    const savedCart= [];
    for(const id in storedCart){
       
    const addedProduct= products.find(product => product.id === id);
    if(addedProduct){
    const quantity = storedCart[id];
    addedProduct.quantity =quantity;
    savedCart.push(addedProduct);

    }
    }
    setCart(savedCart);

   },[products])




   const handleAddToCard = (selectProduct)=>{
    
    let newCart=[];
    const exists =cart.find (product => product.id === selectProduct.id)
    if(!exists){
        selectProduct.quantity= 1;
         newCart=[...cart,selectProduct];
    
    }
    else{
        const rest =cart.filter (product => product.id === selectProduct.id);
        exists.quantity = exists.quantity +1;
        newCart=[...rest,exists];

       
    }
    setCart(newCart);
    addToDb(selectProduct.id);
    
   }




    return (
        <div className='container'>
            
            <div className='product-container'>

         {
            products.map(product => <Product
                key={product.id}
            product={product}
            handleAddToCard ={handleAddToCard}
            
            ></Product>)
         }
            </div>
            <div className='cart-container'>
              <Cart clearCard={clearCard} cart={cart}>
             
              <Link to="/order">
              <button>Review Order</button>
            </Link>

              </Cart>
           

            </div>
            
        </div>
    );
};

export default Shopping;