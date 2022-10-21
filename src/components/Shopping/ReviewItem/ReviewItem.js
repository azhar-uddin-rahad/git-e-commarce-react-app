import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faTrash } from "@fortawesome/free-solid-svg-icons";


const ReviewItem = ({ product,handleRemoveItem }) => {
  const { id, name, price, quantity, img } = product;

  return (
    <div className="review-item">
      <div >
        <img src={img} alt=""></img>
      </div>

      <div className="review-details-container">
        <div className="review-details">
          <p>Name:{name}</p>
          <p>Price:{price}</p>
          <p>quantity : {quantity}</p>
        </div>
        <div className="delect-review-btn">
            <button onClick={()=>handleRemoveItem(id)} className="delect-btn">  <FontAwesomeIcon className="delect-icon" icon={faTrash}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
