import React from "react";
import "../../assets/style/connection.scss";

const Connection = () => {
  return (
    <div className="connection">
      <div className="container">
        <div className="connection_items">
          <div className="connection_items_form">
            <div className="connection_items_form_title">
              <h4>Bog’lanish</h4>
            </div>

            <form>
              <div className="name">
                <label htmlFor="Ism familiya">Ism familiya</label>
                <input type="text" placeholder="Aziza Xolmatova" />
              </div>
              <div className="name">
                <label htmlFor="Telefon raqam">Telefon raqam</label>
                <input type="text" placeholder="+ (000) 00 000" />
              </div>

              <div className="desc">
                <label htmlFor="Izoh">Izoh</label>
                <textarea name="izoh" id="izoh" cols="30" rows="10"></textarea>
              </div>

              <div className="btn">
                <button className="submit">Tasdiqlash</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
