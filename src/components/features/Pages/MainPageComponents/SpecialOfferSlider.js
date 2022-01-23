import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/specialOfferSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import SpecialSliderCard from "./SpecialSliderCard";
SwiperCore.use([Navigation]);
// if you want to use array


const SpecialOfferSlider = () => {
  return (
    <div>
         <Swiper className="specialOfferSlider" slidesPerView={3} spaceBetween={30} navigation={true} >
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <SpecialSliderCard/>
  </SwiperSlide>
 
  
 
  </Swiper>
  
    </div>
  );
};

export default SpecialOfferSlider;