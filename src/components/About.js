// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <h2>About Us</h2>
            <p>Organic Mart is dedicated to offering the best organic produce available. Our mission is to support sustainable farming practices and provide our customers with nutritious and delicious food.</p>
            <img src="/images/farm.jpg" alt="Farm" className="about-image" />
        </div>
    );
}

export default About;
