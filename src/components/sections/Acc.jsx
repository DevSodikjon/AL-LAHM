import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../assets/style/acc.scss";
import Cardacc from "../cards/Cardacc";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Acc = () => {
  const [maxWidth, setMaxWidth] = useState(700);

  useEffect(() => {
    setMaxWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className="acc">
      <div className="container">
        <div className="acc_items">
          <div className="acc_items_title">
            <h3>Aksesuarlar</h3>
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
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
                <SwiperSlide>
                  <Cardacc />
                </SwiperSlide>
              </Swiper>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acc;
