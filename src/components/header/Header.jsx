import HeaderMobile from "../header/HeaderMobile.jsx";
import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiPhoneFill } from "react-icons/pi";
import logo from "../../assets/images/LogoNew.png";
import sun from "../../assets/images/sun-line.svg";
import moon from "../../assets/images/moon.svg";
import burger from "../../assets/images/burger.svg";
import close from "../../assets/images/Close.svg";
import "../header/header.scss";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [active, setActive] = useState(false);

  // Dark Mode \\

  const darkFunc = () => {
    setIsDarkMode(false);
  };

  const lightFunc = () => {
    setIsDarkMode(true);
  };

  // Modal \\

  const openModal = () => {
    console.log("active");
    return setActive(!active);
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
                        className={`lightIcon_box  ${
                          isDarkMode ? "" : "light"
                        }`}
                        onClick={darkFunc}
                      >
                        <img src={sun} className="lightIcon" alt="light" />
                      </div>
                      <div
                        className={`moonIcon_box ${isDarkMode ? "light" : ""}`}
                        onClick={lightFunc}
                      >
                        <img src={moon} alt="moon" className="moonIcon" />
                      </div>
                    </div>
                  </div>

                  <div className="lang_box">
                    <div className="select-container">
                      <select>
                        <option value="0">Uzb</option>
                        <option value="1">Rus</option>
                        <option value="1">Eng</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="burger_icon_box">
              <img
                src={burger}
                alt="burger"
                className="burger_icon"
                onClick={openModal}
              />
            </div>
          </div>

          <HeaderMobile />
        </div>
      </header>

      <div className={`modal ${active ? "active" : ""}`}>
        <div className="modal_items">
          <div className="close_box">
            <img
              src={close}
              alt="close"
              className="close"
              onClick={openModal}
            />
          </div>
          <div className="checkbox">
            <div className="darkmode">
              <div className="darkmode_border">
                <div
                  className={`lightIcon_box  ${isDarkMode ? "" : "light"}`}
                  onClick={darkFunc}
                >
                  <img src={sun} alt="sun" className="lightIcon" />
                </div>
                <div
                  className={`moonIcon_box ${isDarkMode ? "light" : ""}`}
                  onClick={lightFunc}
                >
                  <img src={moon} alt="moon" className="moonIcon" />
                </div>
              </div>
            </div>

            <div className="lang_box">
              <div className="select-container">
                <select>
                  <option value="0">Uzb</option>
                  <option value="1">Rus</option>
                  <option value="1">Eng</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tel_number">
            <NavLink className="tel">
              <PiPhoneFill className="iconPhone" />
              <p className="tel_number">+(000)000 000</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
