import React, { Component } from "react";
import Slider from "react-slick";
import BestSellingSliderCard from "./BestSellingSliderCard";

  const BestSellingSlider = ({data}) => {
    const  settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
      <div className="ttt">
        
        <Slider {...settings}>
        {
         data?.map((item)=>{
           return(

    //  <div>
    //        <BestSellingSliderCard viewList={true} data={item}/>
    //      </div>
          <div>
          <BestSellingSliderCard viewList={true} data={item}/>
        </div>
           )
         })
       }
 

        </Slider>
      </div>
    );
  
};
export default BestSellingSlider;
