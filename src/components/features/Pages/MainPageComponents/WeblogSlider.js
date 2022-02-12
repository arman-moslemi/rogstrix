import React from "react";
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/weblogSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import WeblogCardSlider from "./WeblogCardSlider";
SwiperCore.use([Navigation]);
// if you want to use array


const WeblogSlider = ({data}) => {
  return (
    <div>
         <Swiper className="weblogSlider" slidesPerView={2} spaceBetween={10} navigation={true} >
           {
             data?.map((item)=>{
               return(

  <SwiperSlide>
    <WeblogCardSlider data={item}/>
  </SwiperSlide>
               )
             })
           }
  {/* <SwiperSlide>
    <WeblogCardSlider/>
  </SwiperSlide> */}




  </Swiper>

    </div>
  );
};

export default WeblogSlider;