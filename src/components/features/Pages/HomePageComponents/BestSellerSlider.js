// import React, { Component } from "react";
// import Slider from "react-slick";
// import SliderCard from "./SliderCard";
// import { Container ,Col, Button,Row} from "react-bootstrap";
// // if you want to use array


// const BestSellerSlider = ({data}) => {
//   const  settings = {
//     dots: true,
//     navigator:true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
    
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll:1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow:1,
//           slidesToScroll: 1,
//           initialSlide: 0
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 0
//         }},
//         {
//           breakpoint: 300,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 0
//           }

//       }
//     ]
//   };
//   return (
//     <div>
//         <div className="ttt5">
        
//         <Slider {...settings}>
//         {
//              data?.map((item)=>{
//                return(

//   <div>
//     <SliderCard data={item}/>
//   </div>
//                )
//              })
//            }
   
   
//         </Slider>
//       </div>
        

//   <div className="row mar-top-22">
//     <Col md={4}>

//     </Col>
    
//     <Col md={4} className="ta-left">
//       {/* <Button className="seeAll">
//         مشاهده همه
//       </Button> */}
//     </Col>
//   </div>
 
//     </div>
//   );
// };

// export default BestSellerSlider;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";

 const BestSellerSlider = ({data}) => {

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
return(
<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  arrows={true}
  responsive={responsive}

  ssr={true} 
  // means to render carousel on server-side.
  infinite={true}
  autoPlay={true }
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="ease-in-out .8"
  transitionDuration={500}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={['desktop']}
  rtl={true}
  // deviceType={"desktop"}

  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
{
             data?.map((item)=>{
               return(

  <div>
   <SliderCard data={item}/>
  </div>
               )
          })
         }
  <div>

  </div>
 
</Carousel>
);
 };
 export default BestSellerSlider;