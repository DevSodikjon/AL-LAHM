import React, { useEffect, useState } from "react";
import Cardacc from "../cards/Cardacc";
import "../../assets/style/addAcc.scss";
// import axios from "axios";
const AddAcc = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://al-lahm-render.onrender.com/api/v1/accessory/",
          {
            headers: {
              Accept: "application/json",
              "X-CSRFToken":
                "Jtagn9ROtLH117DVMZxW8ZNW0td01NndgQDQYf95QOFUDNC7pvJgSNJD52ppxelP",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="tahrirlash ">
        <div className="tahrirlash_items">
          <div className="container">
            <div className="modals">
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
                <Cardacc />
                <Cardacc />
                <Cardacc />
                <Cardacc />
                <Cardacc />
                <Cardacc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAcc;
