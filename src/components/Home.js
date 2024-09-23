import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <h2>Welcome to Organic Mart</h2>
            <p>Your one-stop shop for fresh, organic vegetables and fruits. We are committed to providing the highest quality organic produce to promote a healthy and sustainable lifestyle.</p>
            <img src="/images/storefront.jpg" alt="Storefront" className="home-image" />
            <footer>
                <p>&copy; 2024 Organic Mart. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
