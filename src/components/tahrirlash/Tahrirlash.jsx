import React from "react";
import "../tahrirlash/tahrirlash.scss";
import AddingProduct from "../cards/AddingProduct";
import AddingAccCard from "../cards/AddingAccCard";
import AddingOtzivCard from "../cards/AddingOtzivCard";

import star from "../../assets/images/Star.svg";

const Tahrirlash = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "salom",
  //       price: "sss",
  //       amount: 23,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       token:
  //         "PUc4O0mfMJ6qRqSTBvNiHkhdHAIU6O4vmhFEp6Ew9M4jt6R5e1ZCr8dUM9UjCf27",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       console.log(post);
  //       setPosts((posts) => [post, ...posts]);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // const [active, setActive] = useState(false);

  // const modal = () => {
  //   console.log(active);
  //   return setActive(!active);
  // };

  return (
    <div>
      <div className="tahrirlash tahrirlashNew">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tahrirlash;
