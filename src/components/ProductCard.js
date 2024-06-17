import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="quantity-controls">
                <button onClick={decrementQuantity}>-</button>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={() => addToCart(product, quantity)}>Add To Cart</button>
        </div>
    );
};

export default ProductCard;
