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
import { apiAsset } from "../../../../commons/inFormTypes";

SwiperCore.use([Navigation,Pagination]);
// if you want to use array


const AssembleSlidr = ({data}) => {
  console.log(88)
  console.log(data)
  return (
    <div style={{backgroundColor:'#fff'}}>
      
         <div className="exclusiveBox2">
      
            {
                data?.map((item)=>{
                    return(


  <div className="exclusiveSliderCard2 newCardRes" >
      <img src={apiAsset+item.ProductPic}/>
      
  </div>
  
                    )
                })
            }
  
 
  
 
  
         </div>
  
    </div>
  );
};

export default AssembleSlidr;