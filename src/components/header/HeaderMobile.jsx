import React, { useState } from "react";
import burger from "../../assets/images/burger.svg";
import logo from "../../assets/images/LogoNew.png";
import phone from "../../assets/images/phone.svg";
import { PiPhoneFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import sun from "../../assets/images/sun-line.svg";
import moon from "../../assets/images/moon.svg";

const HeaderMobile = () => {
  const [active, setActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkFunc = () => {
    setIsDarkMode(false);
  };

  const lightFunc = () => {
    setIsDarkMode(true);
  };
  const openModal = () => {
    return setActive(!active);
  };
  return (
    <div>
      <div className="mobilHeader">
        <div className="mobilHeader_items">
          <div className="mobilHeader_items_burger_icon_box">
            <img
              src={burger}
              alt="burger"
              className="burger_icon"
              onClick={openModal}
            />
          </div>

          <div className="mobileHeader_items_logo">
            <img src={logo} alt="phone" />
          </div>

          <div className="mpbile_icon">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>

      <div className={`modalPhone ${active ? "active" : ""}`}>
        <div className="modalPhone_items">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="navbar">
            <ul>
              <li>
                <a href="#aboutUs">Asosiy</a>
              </li>
              <li>
                <a href="#aboutUs">Biz haqimizda</a>
              </li>
              <li>
                <a href="#products">Mahsulotlar</a>
              </li>
              <li>
                <a href="#quality">Yetkazib berish</a>
              </li>
            </ul>
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

export default HeaderMobile;
