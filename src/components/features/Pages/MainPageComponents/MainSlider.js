import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/mainSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import MainPageSlide1 from "../../../assets/img/MainPageSlide1.png"
SwiperCore.use([Navigation,Pagination]);
// if you want to use array


const MainSlider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        
        className="MainPageSlider"
      >
       <SwiperSlide>
       <img src={MainPageSlide1} className="MainPageSliderImg"/>

       </SwiperSlide>
       <SwiperSlide>
       <img src={MainPageSlide1} className="MainPageSliderImg"/>

       </SwiperSlide>
       <SwiperSlide>
       <img src={MainPageSlide1} className="MainPageSliderImg"/>

       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;