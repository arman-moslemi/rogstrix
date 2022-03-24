import React, { Component } from "react";
import Slider from "react-slick";
import SpecialSliderCard from "./SpecialSliderCard";

// if you want to use array


const SpecialOfferSlider = ({data}) => {
  const  settings = {
    dots: true,
    navigator:true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }},
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }

      }
    ]
  };
  return (
  
    <div className="ttt2">
        
    <Slider {...settings}>
    {
             data.map((item)=>{
               return(

  <div  >
    <SpecialSliderCard data={item}/>
  </div>
               )
             })
           }
 


    </Slider>
  </div>
  );
};

export default SpecialOfferSlider;