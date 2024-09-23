import React from 'react';
import './CelebrationPopup.css';

const CelebrationPopup = () => {
    return (
        <div className="celebration-popup">
            <div className="popup-content">
                <h2>Thanks for Your Purchase!</h2>
                <p>Your order has been placed successfully.</p>
                <div className="confetti"></div>
            </div>
        </div>
    );
};

export default CelebrationPopup;
