import React from "react";
import "../../assets/style/comments.scss";
import CardsComments from "../cards/CardsComments";
import { useTranslation } from "react-i18next";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Comments = () => {
  const { t } = useTranslation();

  return (
    <div className="comments">
      <div className="container">
        <div className="comments_items">
          <div className="comments_items_title">
            <h3>{t("commnentsTitle")}</h3>
          </div>

          <div className="card_box">
            <Swiper
              className="tabled"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
            </Swiper>
            <Swiper
              className="tabled mobile"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
              <SwiperSlide>
                <CardsComments />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
