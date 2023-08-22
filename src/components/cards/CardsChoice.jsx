import React from "react";

const CardsChoice = (props) => {
  const { p, img, title } = props;

  return (
    <div className="card">
      <div className="card_items">
        <div>
          <div className="card_items_img">
            <img src={img} alt="meat" />
          </div>

          <div className="card_items_title add+">
            <h3>{title}</h3>
          </div>
          <div className="card_items_desc">
            <p>{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsChoice;
