import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/singleProduct.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import SimilarSliderCard from "./SimilarSliderCard";
SwiperCore.use([Navigation]);
// if you want to use array


const SimilarSlider = () => {
  return (
    <div>
         <Swiper className="specialOfferSlider" slidesPerView={4} spaceBetween={10} navigation={true} >
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
  <SwiperSlide>
    <SimilarSliderCard viewList={true}/>
  </SwiperSlide>
 
  
 
  </Swiper>
  
    </div>
  );
};

export default SimilarSlider;