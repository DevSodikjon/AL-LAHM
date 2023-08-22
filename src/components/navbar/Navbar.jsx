import React from "react";
import "../navbar/navbar.scss";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar">
      <ul className="navbar_ul">
        <li>
          {/* <NavLink to={"#aboutUs"} className="NavLink">Asosiy</NavLink> */}
          <a href="#aboutUs">{t("main")}</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Biz haqimizda</NavLink> */}
          <a href="#aboutUs">{t("aboutUs")}</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Mahsulotlar</NavLink> */}
          <a href="#products">{t("products")}</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Yetkazib berish </NavLink> */}
          <a href="#quality">{t("delivery")}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
