import React from "react";
import meat from "../../assets/images/meat.png";

const CardsChoice = (props) => {
  const { date } = props;
  console.log(date);
  return (
    <div className="card">
      <div className="card_items">
        {/* {date?.map((e) => { */}
          <div>
            <div className="card_items_img">
              {/* <img src={e.imageUrl} alt={e.title} /> */}
              <img src={meat} alt="meat" />
            </div>

            <div className="card_items_title">
              <h3>Sifatli mahsulotlar</h3>
            </div>
            <div className="card_items_desc">
              {/* <p>{e.description}swsdsds</p> */}
              <p>Har bir mahsulotimiz mehr va ta’amga to’yingan</p>
            </div>
          </div>
        {/* })} */}
      </div>
    </div>
  );
};

export default CardsChoice;
