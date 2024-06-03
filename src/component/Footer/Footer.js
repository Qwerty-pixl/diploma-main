import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-description">
              We are your reliable online store for quality products. Our goal
              is to meet your needs and offer you the best selection of
              products.
            </p>
          </div>
          
          <div className="footer-column-menus">
            <h3 className="footer-title">Menus</h3>
            <ul className="footer-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/technical-support">Technical Support</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-list">
              <li>
                <a
                  className="phone"
                  href="tel:+996552005753"
                  target="_blank"
                  rel="noopener noreferrer">
                    Contact
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  className="email"
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                    Gmail
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  className="instagram"
                  href="https://instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer">
                    Instagram
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  className="twitter"
                  href="https:/twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer">
                    Twitter
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  className="facebook"
                  href="https:/facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer">
                    Facebook
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  className="adress"
                  href="https://goo.gl/maps/aJ8unThpLjYmzB1W6"
                  target="_blank"
                  rel="noopener noreferrer">
                    Adress
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-social-list">
              <li className="footer-social-item">
                <a
                  className="facebook"
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  className="instagram"
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  className="twitter"
                  href="https://www.twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  className="youtube"
                  href="https://www.youtube.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="GoUp">
            <Link href="#" onClick={scrollToTop}>
              <i className="fa-solid fa-circle-arrow-up" ></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-bottom-text">
            All rights reserved &copy; 2023 Online Store
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
