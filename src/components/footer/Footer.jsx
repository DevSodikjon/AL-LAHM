import React from "react";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/images/LogoNew.png";
import primeTech from "../../assets/images/priemTechCopy.png";
import { Link, NavLink } from "react-router-dom";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { PiPhoneFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logoFooter from "../../assets/images/footer_logo.png";
import "../footer/footer.scss";
import i18n from "../../i18n.js";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language.target.value);
  };
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
                    <p className="tel_numbers">+998905807000</p>
                  </NavLink>
                </div>
                <div className="tel_s">
                  <NavLink className="telss">
                    <PiPhoneFill className="iconPhones" />
                    <p className="tel_numbers">+998905807000</p>
                  </NavLink>
                </div>
                <div className="lang_box">
                  <div
                    className="select-container"
                    onChange={handleChangeLanguage}
                  >
                    <select>
                      <option value="uz">Uzb</option>
                      <option value="ru">Rus</option>
                      <option value="en">Eng</option>
                    </select>
                  </div>
                </div>
                <div className="auth">
                  <p>{t('footerCreator')}</p>
                  <img src={primeTech} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="icons_social">
            <p>{t('footerBizniKuzating')}</p>
            <div className="box">
              <div className="social-container">
                <Link className="Link_icon">
                  <FaFacebookF className="social" />
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

      <div className="footer_mobile">
        <div className="container">
          <div className="footer_mobile_items">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>Al lahm</p>
            </div>

            <div className="nav-box">
              
            </div>

            <div className="navbar">
            <ul>
              <li>
                <a href="#aboutUs">{t("main")}</a>
              </li>
              <li>
                <a href="#aboutUs">{t("aboutUs")}</a>
              </li>
              <li>
                <a href="#products">{t("products")}</a>
              </li>
              <li>
                <a href="#quality">{t("delivery")}</a>
              </li>
            </ul>
            </div>

            <div className="tel_number">
              <NavLink className="tel">
                <PiPhoneFill className="iconPhone" />
                <p className="tel_number">+(000)000 000</p>
              </NavLink>
              <NavLink className="tel">
                <PiPhoneFill className="iconPhone" />
                <p className="tel_number">+(000)000 000</p>
              </NavLink>
            </div>

            <div className="social_box">
              <div className="text">
                <p>{t('footerBizniKuzating')}</p>
              </div>

              <div className="icons">
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

            <div className="auth">
              <p>{t('footerCreator')}</p>
              <img src={logoFooter} alt="logoFooter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
