/*
MOST IMP SHORT CUT TO GENERATER SNIPET--->> rafce
*/
import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeadreSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I' m</h5>
        <h1>Shubham Jadhav</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        {/* <button className="btn btn-primary">Button</button> */}
        <HeadreSocials />
        <div className="me">
          <img src={ME} alt="My pic" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
