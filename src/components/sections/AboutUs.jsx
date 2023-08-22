import React from "react";
import aboutUsImage from "../../assets/images/about_us.png";
import aboutUsImageMobile from "../../assets/images/abputUsMobile.png";
import "../../assets/style/aboutUs.scss";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutUs" id="aboutUs">
      <div className="container">
        <div className="aboutUs_items">
          <div className="aboutUs_items_img">
            <img src={aboutUsImage} alt="avatar" className="tabled" />
            <img src={aboutUsImageMobile} alt="avatar" className="mobile" />
          </div>
          <div className="aboutUs_items_content">
            <h3>{t("aboutTitle")}</h3>
            <p>{t("aboutDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
