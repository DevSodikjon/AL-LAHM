import logo from "../../assets/images/LogoNew.png";
import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import "../header/header.scss";
import { PiPhoneFill } from "react-icons/pi";
import { PiMoonBold } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkFunc = () => {
    setIsDarkMode(false);
  };

  const lightFunc = () => {
    setIsDarkMode(true);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header_items">
            <div className="header_items_logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigationBar">
              <Navbar />
            </div>

            <div className="tel_">
              <NavLink className="tel">
                <PiPhoneFill className="iconPhone" />
                <p className="tel_number">+(000)000 000</p>
              </NavLink>
              <div className="hr"></div>
              <div className="checkbox">
                <div className="darkmode">
                  <div className="darkmode_border">
                    <div
                      className={`lightIcon_box  ${isDarkMode ? "" : "light"}`}
                      onClick={darkFunc}
                    >
                      <FiSun className="lightIcon" />
                    </div>
                    <div
                      className={`moonIcon_box ${isDarkMode ? "light" : ""}`}
                      onClick={lightFunc}
                    >
                      <PiMoonBold className="moonIcon" />
                    </div>
                  </div>
                </div>

                <div className="lang_box">
                  <div className="select-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
