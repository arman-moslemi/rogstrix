import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/exclusiveSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

SwiperCore.use([Navigation]);
// if you want to use array


const ExclusiveSlider = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
         <div className="row padding30">
                   <Col md={12} className="resTaCenter">
                   <div className="">
                        <p className="specialOfferTitle" id="blackColor">
                            پیشنهادهای ویژه
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{padding:0}}>
                        <Button className="seeAll">مشاهده همه</Button>
                    </div>
                   </Col>
               </div>
         <div className="exclusiveBox">
         <Swiper className="exclusiveSlider" slidesPerView={5} spaceBetween={15} navigation={true} >
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img1}/>
      <p>کارت گرافیک</p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img2}/>
      <p>مانیتور</p>
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img3}/>
      <p>موبایل</p>
  </div>
  </SwiperSlide> 
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img4}/>
      <p>مادربورد</p>
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img5}/>
      <p>لپ تاپ</p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img1}/>
      <p>کارت گرافیک</p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img2}/>
      <p>مانیتور</p>
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img3}/>
      <p>موبایل</p>
  </div>
  </SwiperSlide> 
  <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img4}/>
      <p>مادربورد</p>
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard">
      <img src={img5}/>
      <p>لپ تاپ</p>
  </div>
  </SwiperSlide>
 
  
 
  </Swiper>
         </div>
  
    </div>
  );
};

export default ExclusiveSlider;