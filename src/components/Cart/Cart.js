import React from 'react';
import './Cart.css';

const Cart = ({cart,clearCard, children}) => {
   //const {cart}=props;
  
   let total=0;
   let shipping=0;
   let quantity=0;
   for (const product of cart){
    quantity=quantity + product.quantity;
    total  = total + product.price * product.quantity;
    shipping=shipping + product.shipping;
   
  
   }
 let tax=(total * 0.1).toFixed(2);
 const numberTax=parseFloat(tax);
 const grandTotal=total + shipping + numberTax;
 

    return (
        <div className='cart'>
             <h1>card list</h1>
            <div className='info-price'>
                
            <p>selected Item : {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge:{shipping} </p>
            <p>Tax: {numberTax} </p>
            <p>Grand Total: {grandTotal}</p>

            </div>
            <div>
                <button  onClick={clearCard}>Clear Cart</button>
            
                {children}
            </div>

        </div>

    );
};

export default Cart;