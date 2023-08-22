import React, { useState } from "react";
import user from "../../assets/images/user.svg";
import zulf from "../../assets/images/zulf.svg";
import { useTranslation } from "react-i18next";

import "../../assets/style/login.scss";
import Header from "../header/Header";

const Login = () => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://al-lahm-render.onrender.com/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken":
          "Jtagn9ROtLH117DVMZxW8ZNW0td01NndgQDQYf95QOFUDNC7pvJgSNJD52ppxelP",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;
        window.location.href = "/products";
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      {/* <Header/> */}
      <div className="tahrirlash">
        <div className="tahrirlash_items">
          <div className="container">
            {/* -- Adding Cards -- */}

            <div className="modals">
              <div className={`login `}>
                <div className="login_items">
                  <div className="login_items_title">
                    <h3>{t("loginTitle")}</h3>
                  </div>

                  <form className="formLogin" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="login">{t("loginKirish")}</label>
                      <div className="email">
                        <input
                          type="text"
                          value={email}
                          placeholder="admin@mail.com"
                        />
                        <span>
                          <img src={user} alt="user" />
                        </span>
                      </div>
                    </div>

                    <div className="parol">
                      <label htmlFor="login">{t("loginParol")}</label>
                      <div className="email ">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          placeholder="*******"
                        />
                        <span>
                          <img
                            src={zulf}
                            alt="user"
                            className="lock"
                            onClick={toggleShow}
                          />
                          {/* {showPassword
                            ? `${(<img src={zulf} />)}`
                            : ""} */}
                        </span>
                      </div>
                    </div>

                    <div className="btn">
                      <button>{t('connectLabelBtn')}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
