import React, { useState } from 'react';
import './About.css';
import aboutPhoto from "../../assets/About_us_1_1.png";
import ConsultantPhoto from "../../assets/Olivia.webp"
import MenPhoto from "../../assets/man.avif"
import Isabella from "../../assets/isabella.jpg"

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
                We are a team of professionals dedicated to providing exceptional services and products to our customers. Our mission is to offer high-quality solutions that meet the needs and exceed the expectations of our clients.
              </p>
              <p>
                With many years of experience in the industry, we have earned a reputation for high quality and reliability. Our team is passionate about what we do, and we strive for continuous improvement and innovation.
              </p>
              <p>
                Thank you for choosing us. We look forward to serving you and building a long-term relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="creators-section">
        <h2>Our consultants</h2>
        <div className="creators-container">
          <div className="creator-card">
          <img src={ConsultantPhoto} alt="About Us" />
            <div className="creator-info">
              <h3>Olivia Smith</h3>
              <p>stylist of perfum</p>
            </div>
          </div>
          <div className="creator-card">
          <img src={MenPhoto} alt="About Us" />
            <div className="creator-info">
              <h3>Harry Johnson</h3>
              <p>your personality stylist</p>
            </div>
          </div>
          <div className="creator-card">
          <img src={Isabella} alt="About Us" />
            <div className="creator-info">
              <h3>Isabella Levis</h3>
              <p>master perfumer</p>
            </div>
          </div>
         
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(0)} className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}>
                What products do you offer?
              </button>
              {activeIndex === 0 && (
                <div className="accordion-content">
                  <p>
                    In our jewelry store, we offer a wide range of unique and exquisite pieces that reflect high levels of craftsmanship and individual style. Our collection includes diverse adornments crafted from the finest materials, including precious and semi-precious gemstones, gold, silver, and platinum. We offer exclusive rings, necklaces, bracelets, earrings, and more, each piece being a unique work of art. Our designers carefully track the latest trends in the world of fashion and jewelry art to offer you only the most stylish and relevant accessories.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(1)} className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}>
                How can I contact customer service?
              </button>
              {activeIndex === 1 && (
                <div className="accordion-content">
                  <p>
                    You can contact our customer service through the "Contact Us" page, by email at support@example.com, or by calling our customer service hotline at (123) 456-7890. Our team is ready to assist you with any questions or issues.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <button onClick={() => toggleAccordion(2)} className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}>
                Do you offer international shipping?
              </button>
              {activeIndex === 2 && (
                <div className="accordion-content">
                  <p>
                    Yes, we offer international shipping to many countries around the world. Please refer to our shipping information page for details on the countries we ship to, shipping rates, and estimated delivery times.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
