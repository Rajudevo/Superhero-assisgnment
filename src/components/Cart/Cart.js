import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    let selected = '';
    for (const person of cart) {
        if(!person.quantity){
            person.quantity = 1;
        }
       
        total = total + person.price * person.quantity;
        totalQuantity = totalQuantity + person.quantity ;
        selected = selected + ' ' + person.name;
    }

    
  
    return (
        <div className="cart-design">
            <h3> Selection summary</h3>
                <h5>Selected: {totalQuantity}</h5>
                
                <p>Total: ${total.toFixed(2)}</p>
                <div className="name-box">
                <p>Name's: {selected}</p>
                </div>
               <br />
                
                
        </div>
    );
};

export default Cart;