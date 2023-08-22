import React from "react";
import "../../assets/style/hero.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="hero_items">
            <div className="hero_items_content">
              <div className="hero_items_content_title">
                <h2>
                  {t(`titlePartOne`)} <span>{t("span")} </span>
                  {t("titlePartwo")}
                </h2>
                <p>{t("herodesc")}</p>
              </div>
              <div className="hero_items_content_btn">
                <a href="#products" className="menu_btn">
                  {t("heroBtn")}
                </a>
              </div>
              <div className="text">
                <p>{t("herodesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
