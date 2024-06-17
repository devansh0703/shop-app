import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { product, quantity }]);
        }
    };

    return (
        <Router>
            <div className="App">
                <NavBar cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
