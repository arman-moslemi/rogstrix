import React,{useState,useEffect} from 'react'
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/exclusiveSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import img1 from "../../../assets/img/img1.png";
import { apiAsset ,apiUrl} from '../../../../commons/inFormTypes';
import { Link, useHistory } from "react-router-dom";


SwiperCore.use([Navigation]);
// if you want to use array


const ExclusiveSlider = () => {
    const [data,setData]=useState()
    const history = useHistory();

    const groups=()=>{
        const axios = require("axios");
     
     
        axios.get(apiUrl + "AllMainGroup")
        .then(function (response) {
          if (response.data.result == "true") {
     
             setData(response.data.GroupData)
     
             console.log(response.data.GroupData)
     
            // history.push("/RegisterVerify/"+mobile)
     
        }
        else{
     
        }})
        .catch(function (error) {
          console.log(error);
        });
     
     
      }
      useEffect(() => {
        groups();
     // alert(val)
      }, []);
  return (
    <div style={{backgroundColor:'#fff'}}>
         {/* <div className="row padding30">
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
               </div> */}
         <div className="exclusiveBox">
         <Swiper className="exclusiveSlider" slidesPerView={5} spaceBetween={5} navigation={true} >
             {
                 data?.map((item)=>{
                     return(

  <SwiperSlide>
  <div onClick={()=>history.push("/Home")} className="exclusiveSliderCard">
      <img src={apiAsset+item[0].MainPic}/>
      <p>{item[0].MainTitle}</p>
  </div>
  </SwiperSlide>
                     )
                 })
             }

 
 
  
 
  </Swiper>
         </div>
  
    </div>
  );
};

export default ExclusiveSlider;