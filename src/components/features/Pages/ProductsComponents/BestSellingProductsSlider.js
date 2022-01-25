import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/bestSellingProductsSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import BestSellingProductsSliderCard from "./BestSellingProductsSliderCard";
SwiperCore.use([Navigation]);
// if you want to use array


const bestSellingProductsSlider = () => {
  return (
    <div>
         <Swiper className="specialOfferSlider" slidesPerView={4} spaceBetween={5} navigation={true} >
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <BestSellingProductsSliderCard viewList={true}/>
  </SwiperSlide>
 
  
 
  </Swiper>
  
    </div>
  );
};

export default bestSellingProductsSlider;