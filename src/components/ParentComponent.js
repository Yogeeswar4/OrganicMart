import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, onCheckout }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price} x {item.quantity}</p>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <button onClick={onCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
