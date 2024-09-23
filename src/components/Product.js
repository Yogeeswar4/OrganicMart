import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, addToCart, isInCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [showAdded, setShowAdded] = useState(false);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setShowAdded(true);

        // Reset the "Added" message after 2 seconds
        setTimeout(() => {
            setShowAdded(false);
        }, 200);
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Calories:</strong> {product.calories} kcal</p>
                <p><strong>Sugar:</strong> {product.sugar}</p>
                <p><strong>Benefits:</strong> {product.benefits}</p>
                <div className="quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
                </div>
                {showAdded ? (
                    <p className="added-to-cart">Added</p>
                ) : (
                    <button onClick={handleAddToCart}>{isInCart ? 'Added' : 'Add to Cart'}</button>
                )}
            </div>
        </div>
    );
}

export default Product;
