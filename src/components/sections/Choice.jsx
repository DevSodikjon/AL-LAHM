import React from "react";
import CardsChoice from "../cards/CardsChoice";
import percent from "../../assets/images/Percent.svg";
import meat from "../../assets/images/meat.png";
import delivery from "../../assets/images/delivery.svg";
import { useTranslation } from "react-i18next";
import "../../assets/style/choice.scss";

const Choice = () => {
  const { t } = useTranslation();
  return (
    <div className="choice">
      <div className="container">
        <div className="choice_items">
          <div className="choice_items_title">
            <h3>{t("choiceTitle")}</h3>
          </div>

          <div className="choice_items_cardsBox">
            <CardsChoice
              p={t("choiceCardDesc1")}
              img={meat}
              title={t("choiceCardTitle1")}
            />
            <CardsChoice
              p={t("choiceCardDesc2")}
              img={percent}
              title={t("choiceCardTitle2")}
            />
            <CardsChoice
              p={t("choiceCardDesc3")}
              img={delivery}
              title={t("choiceCardTitle3")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
