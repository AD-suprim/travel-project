import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        {/* <div className="footer-container container"> */}
          <div className="footer-box">
            <div className="social">
              <a href="#">
                {/* <i className='bx bxl-facebook'></i> */}
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <CiTwitter />
              </a>
            </div>
          </div>
          <div className="footer-box">
            <h3>Page</h3>
            <a href="#">Home</a>
            <a href="/rent_bike">Bikes</a>
            <a href="/rent_car">Cars</a>
          </div>

          <div className="footer-box">
            <h3>Legal</h3>
            <a href="#">Privacy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
