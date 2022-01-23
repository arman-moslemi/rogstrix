import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/bestSellingSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import BestSellingSliderCard from "./BestSellingSliderCard";
SwiperCore.use([Navigation]);
// if you want to use array


const bestSellingSlider = () => {
  return (
    <div>
         <Swiper className="specialOfferSlider" slidesPerView={5} spaceBetween={0} navigation={true} >
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingSliderCard/>
  </SwiperSlide>
 
  
 
  </Swiper>
  
    </div>
  );
};

export default bestSellingSlider;