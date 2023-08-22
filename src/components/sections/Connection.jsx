import React from "react";
import "../../assets/style/connection.scss";
import { useTranslation } from "react-i18next";
const Connection = () => {
  const { t } = useTranslation();

  return (
    <div className="connection">
      <div className="container">
        <div className="connection_items">
          <div className="connection_items_form">
            <div className="connection_items_form_title">
              <h4>{t("connectTitle")}</h4>
            </div>

            <form>
              <div className="name">
                <label htmlFor="Ism familiya">{t("connectLabelName")}</label>
                <input type="text" placeholder="Aziza Xolmatova" />
              </div>
              <div className="name">
                <label htmlFor="Telefon raqam">{t("connectLabelTel")}</label>
                <input type="text" placeholder="+ (000) 00 000" />
              </div>

              <div className="desc">
                <label htmlFor="Izoh">{t("connectLabelDesc")}</label>
                <textarea name="izoh" id="izoh" cols="30" rows="10"></textarea>
              </div>

              <div className="btn">
                <button className="submit">{t("connectLabelBtn")}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
