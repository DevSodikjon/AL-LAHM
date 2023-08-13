import React from "react";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/images/LogoNew.png";
import primeTech from "../../assets/images/priemTechCopy.png";
import { Link, NavLink } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { PiPhoneFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import "../footer/footer.scss";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer_items">
            <div className="footer_items_logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav">
              <div className="nav-box">
                <Navbar />
              </div>
              <div className="tels">
                <div className="tel_s">
                  <NavLink className="telss">
                    <PiPhoneFill className="iconPhones" />
                    <p className="tel_numbers">+(000)000 000</p>
                  </NavLink>
                </div>
                <div className="tel_s">
                  <NavLink className="telss">
                    <PiPhoneFill className="iconPhones" />
                    <p className="tel_numbers">+(000)000 000</p>
                  </NavLink>
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
                <div className="auth">
                  <p>Sayt yaratuvchisi:</p>
                  <img src={primeTech} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="icons_social">
            <p>Bizni kuzating</p>
            <div className="box">
              <div className="social-container">
                <Link className="Link_icon">
                  <BiSolidHomeAlt2 className="social" />
                </Link>
              </div>
              <div className="social-container">
                <Link className="Link_icon">
                  <FaTwitter className="social" />
                </Link>
              </div>
              <div className="social-container">
                <Link className="Link_icon">
                  <FiInstagram className="social" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
