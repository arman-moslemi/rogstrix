import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/bestSellerSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import SliderCard from "./SliderCard";
SwiperCore.use([Navigation]);
// if you want to use array


const BestSellerSlider = ({data}) => {
  return (
    <div>
         <Swiper slidesPerView={3} spaceBetween={30} navigation={true} className="mySwiper">
           {
             data?.map((item)=>{
               return(

  <SwiperSlide>
    <SliderCard data={item}/>
  </SwiperSlide>
               )
             })
           }

  <div className="row mar-top-22">
    <Col md={4}>

    </Col>
    <Col md={4} className="ta-center">
    <p className="sliderTiltleBottom">
      انواع مانیتورها
      </p>
    </Col>
    <Col md={4} className="ta-left">
      <Button className="seeAll">
        مشاهده همه
      </Button>
    </Col>
  </div>
  </Swiper>

    </div>
  );
};

export default BestSellerSlider;