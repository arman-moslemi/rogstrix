import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { Container ,Col, Button,Row} from "react-bootstrap";
// if you want to use array


const BestSellerSlider = ({data}) => {
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
    <div>
        <div className="ttt5">
        
        <Slider {...settings}>
        {
             data?.map((item)=>{
               return(

  <div>
    <SliderCard data={item}/>
  </div>
               )
             })
           }
   
   
        </Slider>
      </div>
        

  <div className="row mar-top-22">
    <Col md={4}>

    </Col>
    
    <Col md={4} className="ta-left">
      {/* <Button className="seeAll">
        مشاهده همه
      </Button> */}
    </Col>
  </div>
 
    </div>
  );
};

export default BestSellerSlider;