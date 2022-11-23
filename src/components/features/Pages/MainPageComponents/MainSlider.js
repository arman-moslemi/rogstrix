import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/mainSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import MainPageSlide1 from "../../../assets/img/MainPageSlide1.png"
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

SwiperCore.use([Navigation,Pagination,Autoplay]);
// if you want to use array


const MainSlider = ({data}) => {
  return (
    <div>
      <Swiper
        pagination={true}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          
        }}

        className="MainPageSlider"
      >

       <SwiperSlide >
        <a href={data?.LinkMainSlider1}>

       <img src={apiAsset+data?.MainSlider1} className="MainPageSliderImg"/>
        </a>

       </SwiperSlide>
       <SwiperSlide>
       <a href={data?.LinkMainSlider2}>

       <img src={apiAsset+data?.MainSlider2} className="MainPageSliderImg"/>
       </a>

       </SwiperSlide>
       <SwiperSlide>
       <a href={data?.LinkMainSlider3}>

       <img src={apiAsset+data?.MainSlider3} className="MainPageSliderImg"/>
       </a>

       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;