import React from "react";
import "../../assets/style/addproduct.scss";
import CardsProducts from "../cards/CardsProducts";
const AddProducts = () => {
  return (
    <div>
      <div className="tahrirlash">
        <div className="tahrirlash_items">
          <div className="container">
            <div className="modals">
              <div className="productAdd ">
                <div className="productAdd_items">
                  <div className="productAdd_items_title">
                    <h3>Mahsulotlarimiz</h3>
                  </div>

                  <form className="formLogin">
                    <div>
                      <label htmlFor="login">Mahsulot nomi</label>
                      <div className="email">
                        <input type="text" placeholder="Kolbasa dudlangan" />
                      </div>
                    </div>

                    <div className="parol">
                      <label htmlFor="login">Narxi</label>
                      <div className="email ">
                        <input type="text" placeholder="89 000 so’m" />
                      </div>
                    </div>

                    <div className="parol">
                      <label htmlFor="login">Miqdori</label>
                      <div className="email ">
                        <input type="text" placeholder="1 kilo" />
                      </div>
                    </div>

                    <div className="parol">
                      <label htmlFor="login">Rasm qo’shish</label>
                      <div className="email ">
                        <input type="file" placeholder="Rasmni qo’shing" />
                      </div>
                    </div>

                    <div className="btn">
                      <button>Tasdiqlash</button>
                      <button>Bekor qilish</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="tahrirlash_items_cardAdd">
              <div className="tahrirlash_items_cardAdd_title">
                <h3>Mahsulotlar</h3>
              </div>

              <div className="card_group">
                <CardsProducts />
                <CardsProducts />
                <CardsProducts />
                <CardsProducts />
                <CardsProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
