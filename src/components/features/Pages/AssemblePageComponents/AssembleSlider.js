import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/assemble.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

SwiperCore.use([Navigation,Pagination]);
// if you want to use array


const AssembleSlidr = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      
         <div className="exclusiveBox2">
         <Swiper className="exclusiveSlider2" slidesPerView={4} spaceBetween={35} navigation={true}  pagination={true}
        
        grabCursor={true}
        centeredSlides={true}
        
        >
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img1}/>
      
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img2}/>
      
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img3}/>
      
  </div>
  </SwiperSlide> 
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img4}/>
     
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img5}/>
      
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img1}/>
     
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img2}/>
     
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img3}/>
      <p>موبایل</p>
  </div>
  </SwiperSlide> 
  <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img4}/>
    
  </div>
  </SwiperSlide>
   <SwiperSlide>
  <div className="exclusiveSliderCard2">
      <img src={img5}/>
    
  </div>
  </SwiperSlide>
 
  
 
  </Swiper>
         </div>
  
    </div>
  );
};

export default AssembleSlidr;