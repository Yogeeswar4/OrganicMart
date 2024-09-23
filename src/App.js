import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CelebrationPopup from './components/CelebrationPopup';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const addToCart = (product, quantity) => {
        const itemIndex = cartItems.findIndex(item => item.id === product.id);
        if (itemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[itemIndex].quantity += quantity;
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    };

    const handleCheckout = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            setCartItems([]);
        }, 5000);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={handleCheckout} />} />
                </Routes>
                {showPopup && <CelebrationPopup />}
            </div>
        </Router>
    );
}

export default App;
