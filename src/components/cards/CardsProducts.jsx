import React from "react";
import card_sausage from "../../assets/images/card_sausage.png";
const CardsProducts = () => {
  return (
    <div className="card">
      <div className="card_items">
        <div className="card_items_image">
          <img src={card_sausage} alt="card_sausage" />
        </div>

        <div className="card_items_content">
          <div className="card_items_title">
            <h3>Kolbasa mahsulotlari</h3>
          </div>
          <hr />
          <div className="card_items_products_items">
            <p className="kilo">1k</p>
            <p className="price">89.000 so’m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProducts;
