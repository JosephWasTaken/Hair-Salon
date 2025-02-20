import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer-line1">
          <div className="footer-line"></div>
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <div className="footer-line"></div>
        </div>
        <h1>Copyright © 2024 TressBliss, Inc</h1>
        <h1>
          TressBliss Salon, Strada Bogdan Petriceicu Hasdeu Nr.82, Cluj-Napoca
          400371 - TressBlissDesk@gmail.com
        </h1>
      </div>
    </>
  );
};

export default Footer;
