import React from "react";
// import { NavLink } from "react-router-dom";
import "../navbar/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar_ul">
        <li>
          {/* <NavLink to={"#aboutUs"} className="NavLink">Asosiy</NavLink> */}
          <a href="#aboutUs">About</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Biz haqimizda</NavLink> */}
          <a href="#aboutUs">Biz haqimizda</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Mahsulotlar</NavLink> */}
          <a href="#products">Mahsulotlar</a>
        </li>
        <li>
          {/* <NavLink className="NavLink">Yetkazib berish </NavLink> */}
          <a href="#quality">Yetkazib berish</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
