import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Fashion&Fit</h1>
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Navbar;