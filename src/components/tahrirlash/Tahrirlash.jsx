import React from "react";
import "../tahrirlash/tahrirlash.scss";
import AddingProduct from "../cards/AddingProduct";
import AddingAccCard from "../cards/AddingAccCard";
import AddingOtzivCard from "../cards/AddingOtzivCard";
import user from "../../assets/images/user.svg";
import zulf from "../../assets/images/zulf.svg";
import star from "../../assets/images/Star.svg";

const Tahrirlash = () => {
  return (
    <div>
      <div className="tahrirlash">
        <div className="tahrirlash_items">
          <div className="container">
            {/* -- Adding Cards -- */}

            <div className="modals">
              <div className="title">
                <h3>Tahrirlash</h3>
              </div>

              <div className="modals_card_box">
                <AddingProduct />
                <AddingAccCard />
                <AddingOtzivCard />
              </div>
            </div>

            {/* -- Login -- */}

            <div className="login">
              <div className="login_items">
                <div className="login_items_title">
                  <h3>Tizimga kirish</h3>
                </div>

                <form className="formLogin">
                  <div>
                    <label htmlFor="login">Login</label>
                    <div className="email">
                      <input type="text" placeholder="admin@mail.com" />
                      <span>
                        <img src={user} alt="user" />
                      </span>
                    </div>
                  </div>

                  <div className="parol">
                    <label htmlFor="login">Parol</label>
                    <div className="email ">
                      <input type="text" placeholder="*******" />
                      <span>
                        <img src={zulf} alt="user" />
                      </span>
                    </div>
                  </div>

                  <div className="btn">
                    <button>Tasdiqlash</button>
                  </div>
                </form>
              </div>
            </div>

            {/* -- Adding Products -- */}

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
                  </div>
                </form>
              </div>
            </div>

            {/* -- Adding acc -- */}
            <div className="productAdd addingAcc">
              <div className="productAdd_items">
                <div className="productAdd_items_title">
                  <h3>Aksesuarlar</h3>
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
                  </div>
                </form>
              </div>
            </div>

            {/* -- Otziv -- */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tahrirlash;
