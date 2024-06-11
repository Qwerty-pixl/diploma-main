import React, { useState } from 'react';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/send', {
        name,
        email,
        message,
      });
      setStatus('Сообщение успешно отправлено!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Произошла ошибка при отправке сообщения.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contacts-container">
      <h2>Contacts</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Our address</h3>
          <p>City, street</p>
        </div>
        <div className="contact-item">
          <h3>Phone number</h3>
          <p>+7 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>example@example.com</p>
        </div>
      </div>
      <div className="message-form-container">
        <h2>Send message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
      <div className="contacts-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15466.31345645536!2d78.391487!3d42.490203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1625684054483!5m2!1sen!2sus"
          title="Контактная информация"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Orders;
