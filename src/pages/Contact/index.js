import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please reach out to us:</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p>You can also reach us at:</p>
      <p>Email: contact@juarasatuindonesia.com</p>
      <p>Phone: +62 123 456 789</p>
    </div>
  );
};

export default Contact;