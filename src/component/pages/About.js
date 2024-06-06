import React from 'react';
import './About.css';
import aboutPhoto from "../../assets/About_us_1_1.png"

export default function About() {
  return (
    <div className="About">
      <section id="about" className="section-about">
        <div className="container">
          <div className="wrapper">
            <div className="about_left">
              <img src={aboutPhoto} alt="About Us" />
            </div>
            <div className="about_right">
              <h2>About Us</h2>
              <p>
                We are a dedicated team of professionals committed to providing exceptional services and products to our customers. Our mission is to deliver high-quality solutions that meet the needs and exceed the expectations of our clients.
              </p>
              <p>
                With years of experience in the industry, we have built a reputation for excellence and reliability. Our team is passionate about what we do, and we strive to continuously improve and innovate.
              </p>
              <p>
                Thank you for choosing us. We look forward to serving you and building a long-lasting relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
