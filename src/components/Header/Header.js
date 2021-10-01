import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="budget">
            <h1>Select best developers </h1>
            <p>World best developers of 2021. Select best of best now!!</p>
            <h3>Total budget : 200 Million</h3>
            </div>
            
            <nav>
                <a href="/person">Developers</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;