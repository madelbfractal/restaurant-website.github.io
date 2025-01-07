import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us!</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-details">
                <h3>Our Location</h3>
                <p>123 Gina's Italian Cuisine St.</p>
                <p>City, State, Zip</p>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
                <h3>Email</h3>
                <p>info@ginasitaliancuisine.com</p>
            </div>
        </div>
    );
};

export default Contact;