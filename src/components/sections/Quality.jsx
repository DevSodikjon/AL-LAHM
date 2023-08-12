import React from "react";
import "../../assets/style/quality.scss";
import paper from "../../assets/images/paper_copy.png";
import meat_ from "../../assets/images/meat_.png";
import spoon from "../../assets/images/spoon_copy.png";

const Quality = () => {
  return (
    <div className="quality" >
      <div className="bg">
        <div className="container">
          <div className="quality_items">
            <div className="quality_items_content">
              <h3>Mahsulotlarimiz sifati</h3>
              <p>
                O‘zbekistondagi zamonaviy korxonada yuqori sifatli kolbasa va
                go‘shtli delikates mahsulotlari ishlab chiqarilmoqda. <br />{" "}
                Go'sht mahsulotlarini ishlab chiqarish uchun faqat sog'lom
                hayvonlar va qushlarning go'shti tegishli tekshiruvdan va
                veterinarning ruxsatidan so'ng ishlatiladi.
              </p>
            </div>

            <div className="quality_items_images">
              <div className="paper">
                <img src={paper} alt="paper" />
              </div>
              <div className="meat_">
                <img src={meat_} alt="meat_" />
              </div>
              <div className="spoon">
                <img src={spoon} alt="spoon" />
              </div>
            </div>

            <div className="quality_items_delivery" id="quality">
              <div className="title">
                <h4>Yetkazib berish xizmati</h4>
                <p>
                  O’zbekiston bo’ylab barcha viloyatlarga tez yetkazib berish
                  xizmati mavjud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
