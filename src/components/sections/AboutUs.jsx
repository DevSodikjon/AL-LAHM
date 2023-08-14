import React from "react";
import aboutUsImage from "../../assets/images/about_us.png";
import aboutUsImageMobile from "../../assets/images/abputUsMobile.png";
import "../../assets/style/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs" id="aboutUs">
      <div className="container">
        <div className="aboutUs_items">
          <div className="aboutUs_items_img">
            <img src={aboutUsImage} alt="avatar" className="tabled" />
            <img src={aboutUsImageMobile} alt="avatar" className="mobile" />
          </div>
            <div className="aboutUs_items_content">
              <h3>Biz haqimizda</h3>
              <p>
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari
                Sifatli go’sht, kolbasa va yarim tayyor go’sht mahsulotlari{" "}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
