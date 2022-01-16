import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/bestSellerSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";

SwiperCore.use([Pagination,Navigation]);
// if you want to use array


const BestSellerSlider = () => {
  return (
    <div>
         <Swiper slidesPerView={3} spaceBetween={30} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </div>
  );
};

export default BestSellerSlider;