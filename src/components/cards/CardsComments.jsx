import React from "react";
import stars from "../../assets/images/stars.png";


const CardsComments = () => {

  return (
    <div className="card">
      <div className="card_items">
        <div className="card_items_username-starts">
          <p>Nargiza Hamidova </p>

          <img src={stars} alt="" />
        </div>

        <div className="desc">
          <p>Al lahm mahsulotlari judayam mazzali va sifatli</p>
        </div>
      </div>
    </div>
  );
};

export default CardsComments;
