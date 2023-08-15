import React from "react";
import add from "../../assets/images/plus.svg";
const AddingAccCard = () => {
  return (
    <div>
      <div className="cards">
        <div className="cards_items">
          <div className="card_items_title">
            <h3>Aksesuar qo’shish</h3>
          </div>

          <div className="add">
            <img src={add} alt="add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingAccCard;
