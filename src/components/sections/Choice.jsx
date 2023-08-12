import React from "react";
import CardsChoice from "../cards/CardsChoice";
// import data from "../../db/products.json";
import "../../assets/style/choice.scss";

const Choice = () => {
  // const [date, setDate] = useState(data);
  return (
    <div className="choice">
      <div className="container">
        <div className="choice_items">
          <div className="choice_items_title">
            <h3>Nega bizni tanlashadi?</h3>
          </div>

          <div className="choice_items_cardsBox">
            {/* {date.map((card) => {
              <CardsChoice date={card}/>
            })} */}

            <CardsChoice />
            <CardsChoice />
            <CardsChoice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
