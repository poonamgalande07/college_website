import React from "react";
import "./style.css"; 
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        {/* About Section */}
        <div className="footer_section">
          <h3>About Us</h3>
          <p>
            Welcome to MIT COLLEGE OF CS & IT BASMATH, where excellence meets innovation. 
            We are committed to providing quality education and shaping the leaders of tomorrow.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer_section">
          <h3>Contact Us</h3>
          <p>Email: mitcollege@12.edu</p>
          <p>Phone: +91 3456789012</p>
          <p>Address: vaijvade complex , MIT college basmath, city:Basmath</p>
        </div>

        {/* Social Media Section */}
        <div className="footer_section">
          <h3>Follow Us</h3>
          <div className="social_icons">
            <a href="https://instagram.com"><FaInstagram/></a>
            <a href="https://twitter.com"><FaTwitter/></a>
            <a href="https://facebook.com"><FaFacebook/></a>
          </div>
        </div>
      </div>
                   {/* Back to top button */}
      <div className="footer_bottom">
        <button className="back_to_top_button" onClick={scrollToTop}>
          Back to Top
        </button>
        <p>© 2024 MIT COLLEGE OF CS & IT BASMATH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;