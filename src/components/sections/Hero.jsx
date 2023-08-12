import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/style/hero.scss";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="hero_items">
            <div className="hero_items_content">
              <div className="hero_items_content_title">
                <h2>
                  Haqiqiy <span>ta’am</span> va lazzatni his eting!
                </h2>
                <p>
                  Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari{" "}
                </p>
              </div>
              <div className="hero_items_content_btn">
                <NavLink className="menu_btn">Menuni ko'rish</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
