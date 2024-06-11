import React, { useState } from "react";
import "./Support.css";

export default function Support() {
  const [formData, setFormData] = useState({
    recipientName: "",
    senderName: "",
    message: "",
    price: "",
    photo: null,
  });
  const [showCertificate, setShowCertificate] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      setFormData({ ...formData, photo: files[0] });
      setPhotoURL(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  return (
    <div className="Support">
      <h2>How Can You Arrange Delivery?</h2>
      <div className="steps">
        <div className="step">
          <h3>1</h3>
          <p>First, to order, select the product that you liked in the basket so as not to lose it.</p>
        </div>
        <div className="step">
          <h3>2</h3>
          <p>Secondly, go to the shopping cart and make sure that you have chosen exactly what you wanted.</p>
        </div>
        <div className="step">
          <h3>3</h3>
          <p>In the third register, specify your address, email, and phone number for the order.</p>
        </div>
      </div>
      <p className="note">
        Once you have met all three points, you can expect your order.
        Delivery is carried out during the day in the city and during the week in other regions.
        Thank you for your purchase, wait for your order!!!
      </p>

      <h2>Gift Certificate</h2>
      <form onSubmit={handleSubmit} className="gift-form">
        <div>
          <label htmlFor="recipientName">Recipient's Name:</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="senderName">Sender's Name:</label>
          <input
            type="text"
            id="senderName"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Generate Certificate</button>
      </form>

      {showCertificate && (
        <div className="certificate-preview">
          <h3>Gift Certificate</h3>
          <p>To: {formData.recipientName}</p>
          <p>From: {formData.senderName}</p>
          <p>Message: {formData.message}</p>
          <p>Price: ${formData.price}</p>
          {photoURL && <img src={photoURL} alt="Gift" className="certificate-photo" />}
        </div>
      )}
    </div>
  );
}
