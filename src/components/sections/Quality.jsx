import React from "react";
import "../../assets/style/quality.scss";
import paper from "../../assets/images/paper_copy.png";
import meat_ from "../../assets/images/meat_.png";
import spoon from "../../assets/images/spoon_copy.png";
import { useTranslation } from "react-i18next";

const Quality = () => {
  const { t } = useTranslation();
  return (
    <div className="quality">
      <div className="bg">
        <div className="container">
          <div className="quality_items">
            <div className="quality_items_content">
              <h3>{t("qualityTitle")}</h3>
              <p>{t("qualityDesc")}</p>
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
                <h4>{t("deliveryTitle")}</h4>
                <p>{t("deliveryDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
