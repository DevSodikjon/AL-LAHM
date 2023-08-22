import React from "react";
import add from "../../assets/images/plus.svg";
import { Link } from "react-router-dom";
const AddingOtzivCard = (props) => {
  const { modal } = props;
  return (
    <div>
      <div className="cards" onClick={modal}>
        <div className="cards_items">
          <div className="card_items_title">
            <h3>Otziv qo’shish</h3>
          </div>

          <div className="add">
            <Link to="/login">
              <img src={add} alt="add" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingOtzivCard;
