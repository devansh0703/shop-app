import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.quantity} x {item.product.title} - ${item.product.price * item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
