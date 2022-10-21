import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,ratings}=props.product;
  
    return (
        <div className='product'>
          <img className='productImg' src={img} alt="" />
           <div className='product-info'>
           <h6 className='productName'>{name}</h6>
           <p>Price:{price}</p>
           <p>Manufacturer:{seller}</p>
           <p>Rating: {ratings}</p>

           </div>
           <button  onClick={()=>props.handleAddToCard(props.product
            )} className='addToCard'><p>Add to card</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;