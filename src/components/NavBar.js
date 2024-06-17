import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ cartItemCount }) => {
    return (
        <nav className="navbar">
            <h1>Shop App</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart ({cartItemCount})</Link>
            </div>
        </nav>
    );
};

export default NavBar;
