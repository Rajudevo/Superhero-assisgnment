import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Person.css';
import Rating from 'react-rating';

const Person = (props) => {
    console.log(props);
    const {name, img, email, price, phone, website } = props.person;
    const cartIcon = <FontAwesomeIcon icon={faUserPlus } />
    return (
        <div className="person">
            <div >
            <img src={img} alt="" />
            <h4 className="person-name">Name:{name}</h4>
            <p><small>Email: {email}</small></p>
            <p className="price">Price: {price}</p>
            <p>Phone: {phone}</p>
            <p><small>Website: {website}  </small></p>
            <Rating 
            initialRating= {4}
            readonly emptySymbol ="far fa-star icon-color"
            fullSymbol = "fas fa-star icon-color">

            </Rating>
            <br />
            <button onClick={() => props.handleAddToCart(props.person)} className="btn-regular">{cartIcon} Add to cart</button>
            </div>

        </div>
           
            
          
            
       
    );
};

export default Person;