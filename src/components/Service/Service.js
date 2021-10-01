import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Service.css';

const Service = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] =useState([]);
    const [displayPersons, setDisplayPersons] = useState([]);

    useEffect(() => {
        fetch('./Persons.JSON')
        .then(res => res.json())
        .then(data => {
            setPersons(data);
            setDisplayPersons(data);
            console.log(data)
        });

    }, [])

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts.length);
        setDisplayPersons(matchedProducts);
    }
    return (
        <div> 
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder="search here" />

            </div>
            <div className="service-container">
            <div className="person-container">
                {/* <h3>Products: {products.length} </h3> */}
                {
                    displayPersons.map(person => <Person
                        key={person.id}
                        person ={person}
                        handleAddToCart = {handleAddToCart}
                        
                        ></Person>)
                }
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
        </div>
        
    );
};

export default Service;