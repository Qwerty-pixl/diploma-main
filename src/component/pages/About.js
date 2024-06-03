import React from 'react';
import './About.css';
  
export default function About() {
return (
  <div className="About">
    <section id="about" className="section-about">
      <div className="container">
        <h2 className="section-title">About Our Company</h2>
        <p className="section-description">
          We are a company specializing in the production and provision of a wide range of high-quality products. Our mission is to improve people's lives by providing them with reliable and safe products that contribute to their health and well-being.
        </p>
        <h2 className="section-title">
          Our company is built on the following core values:
        </h2>
        <ul className="values-list">
          <li className="value-item">Quality Products: We strive to offer our customers only the best products that meet the highest standards of quality and safety. We carefully select ingredients, utilize advanced manufacturing technologies, and rigorously control every stage of the production process.</li>
          <li className="value-item">Customer Care: Our customers are our top priority. We always prioritize the interests and needs of our customers. We aim to provide the best service, be responsive, and help our customers with any inquiries or concerns they may have.</li>
          <li className="value-item">Environmental Responsibility: We recognize the importance of environmental conservation and caring for our planet. Therefore, we adhere to the principles of sustainable production. We strive to reduce our environmental footprint by using eco-friendly and energy-efficient manufacturing processes, managing waste effectively, and supporting initiatives to preserve natural resources.</li>
        </ul>
        <p className="section-description">
          We take pride in being a company that is involved in the production and provision of products that enable our customers to lead a healthy lifestyle and experience satisfaction.
        </p>
      </div>
    </section>
  </div>
);
}