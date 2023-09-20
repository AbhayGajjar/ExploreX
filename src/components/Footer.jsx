import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>ExploreX</h1>
            <p>Choose Your Favourite Destination!</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-snapchat-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>Contact Us</h3>
            <a href="/">Address: Kalol</a>
            <a href="/">Zip code: 382715</a>
            <a href="/">Email: abhaymgajjar@gmail.com</a>
            <a href="/">Phone: 9313337362</a>
          </div>
          <div>
            <h3>Explore With Us</h3>
            <a href="/">More Tours</a>
            <a href="/">Blog</a>
            <a href="/">Signup</a>
            <a href="/">Status</a>
          </div>
          <div>
            <h3>Customer Service</h3>
            <a href="/">FAQs</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Refund Policy</a>
          </div>
          <div>
            <h3>Others</h3>
            <a href="/">License</a>
            <a href="/">Supports</a>
            <a href="/">Subscribe</a>
            <a href="/">About Us</a>
          </div>
        </div>
        <div className="copy">
          Copyright © 2023 with A_BHAY. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
