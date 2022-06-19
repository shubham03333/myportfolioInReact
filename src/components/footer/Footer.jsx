/*
MOST IMP SHORT CUT TO GENERATER SNIPET--->> rafce
*/

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SJ 
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; SJ Graphics. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
