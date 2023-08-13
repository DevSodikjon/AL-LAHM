import React, { useState, useEffect } from "react";
import "../../assets/style/products.scss";
import CardsProducts from "../cards/CardsProducts";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Products = () => {
  const [maxWidth, setMaxWidth] = useState(700);

  useEffect(() => {
    setMaxWidth(window.innerWidth);
  },[window.innerWidth]);
  return (
    <div>
      <div className="products" id="products">
        <div className="container">
          <div className="products_items">
            <div className="products_items_title">
              <h3>Mahsulotlarimiz</h3>
            </div>

            <div className="card_box">
              <Link className="cardProductsLink">
                <Swiper
                  className="swippper"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={maxWidth < 768 ? 3 : 4}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                  </SwiperSlide>
                </Swiper>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
