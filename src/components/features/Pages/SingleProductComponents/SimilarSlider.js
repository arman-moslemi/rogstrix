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


const SimilarSlider = ({data}) => {
  return (
    <div>
         <Swiper
          breakpoints={{
            // when window width is >= 640px
            499: {
              slidesPerView: 1,
              spaceBetweenSlides: 50
          },
          // when window width is <= 999px

          999: {
              slidesPerView: 5,
              spaceBetweenSlides: 50
          }
          }}
          className="specialOfferSlider" slidesPerView={5} spaceBetween={10} navigation={true} >
{
  data?.map((item)=>{
    return(

  <SwiperSlide>
    <SimilarSliderCard viewList={true} data={item}/>
  </SwiperSlide>
    )
  })
}




  </Swiper>

    </div>
  );
};

export default SimilarSlider;