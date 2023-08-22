import React from "react";
import star from "../../assets/images/Star.svg";
import CardsComments from "../cards/CardsComments";
import "../../assets/style/addComments.scss";

const AddComments = () => {
  return (
    <div>
      <div className="tahrirlash">
        <div className="tahrirlash_items">
          <div className="container">
            <div className="modals">
              <div className="productAdd Otziv">
                <div className="productAdd_items">
                  <div className="productAdd_items_title">
                    <h3>Otziv</h3>
                  </div>

                  <form className="formLogin">
                    <div>
                      <label htmlFor="login">Ism familiya</label>
                      <div className="email">
                        <input type="text" placeholder="Azizova Nafisa" />
                      </div>
                    </div>

                    <div className="parol">
                      <label htmlFor="login">Bahosi</label>
                      <div className="email ">
                        <div className="star-img">
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="izoh">
                      <label htmlFor="login">Izoh</label>

                      <textarea
                        name="izoh"
                        id="izoh"
                        cols="9"
                        rows="10"
                        placeholder="Al lahm mahsulotlari judayam mazzali va sifatli"
                      ></textarea>
                    </div>
                    <div className="btn">
                      <button>Tasdiqlash</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="tahrirlash_items_cardAdd">
                <div className="tahrirlash_items_cardAdd_title">
                  <h3>Mahsulotlar</h3>
                </div>

                <div className="card_group">
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                  <CardsComments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComments;
