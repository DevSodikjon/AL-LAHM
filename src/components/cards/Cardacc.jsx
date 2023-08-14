import React from "react";
import accThing from "../../assets/images/accThing.png";


const Cardacc = () => {
  return (
    <div className="card">
      <div className="card_items">
        <div className="card_items_image">
          <img src={accThing} alt="accThing" />
        </div>

        <div className="card_items_content">
          <div className="card_items_title">
            <h3>Yarim tayyor kaboblar</h3>
          </div>
          <hr />
          <div className="card_items_products_items">
            <p className="kilo">6 ta</p>
            <p className="price">89.000 so’m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardacc;
