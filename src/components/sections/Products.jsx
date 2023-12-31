import React, { useState, useEffect } from "react";
import "../../assets/style/products.scss";
import CardsProducts from "../cards/CardsProducts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  }, [window.innerWidth]);

  const { t } = useTranslation();

  return (
    <div>
      <div className="products" id="products">
        <div className="container">
          <div className="products_items">
            <div className="products_items_title">
              <h3>{t('productsTitle')}</h3>
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
                  onSlideChange={() => console.log()}
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
              <Link className="cardProductsLink add">
                <Swiper
                  className="swippper"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>

                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardsProducts />
                    <CardsProducts />
                  </SwiperSlide>
                </Swiper>
              </Link>
            </div>
          </div>

          <div className="products_cards">
            {/* <div className="title">sdsdsdsd</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
