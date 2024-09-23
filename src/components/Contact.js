// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us. We'd love to hear from you!</p>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
