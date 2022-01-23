import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/newProductSlider.css";
import NewProductSliderCard from "./NewProductSliderCard";
import { Container ,Col, Button,Row} from "react-bootstrap";
import MainPageSlide1 from "../../../assets/img/MainPageSlide1.png"
SwiperCore.use([Pagination]);
// if you want to use array


const NewProductSlider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        
        className="NewProductSlider"
      >
       <SwiperSlide>
    <div className="whiteBoxSlider">
    <NewProductSliderCard/>
    </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="whiteBoxSlider">
    <NewProductSliderCard/>
    </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="whiteBoxSlider">
    <NewProductSliderCard/>
    </div>
       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewProductSlider;