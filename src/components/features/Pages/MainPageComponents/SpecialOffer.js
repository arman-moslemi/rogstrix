import React,{useState,useEffect} from "react";
import redBanner from "../../../assets/img/redBanner.png";
import blackBanner from "../../../assets/img/blackBanner.png";
import "./Styles/specialOffer.css";
import SpecialOfferSlider from "./SpecialOfferSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

// if you want to use array


const SpecialOffer = ({data}) => {
    const [special,setSpecial]=useState([])

    const mainProduct=(ss)=>{
        const axios = require("axios");


          axios.post(apiUrl + "LastMainProduct",{MainGroupID:ss})
          .then(function (response) {
            if (response.data.result == "true") {

              setSpecial(response.data.Data)
              console.log(11)
              console.log(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });


      }
      const mainSlider=()=>{
        const axios = require("axios");


          axios.post(apiUrl + "LastMainProduct",{MainGroupID:1})
          .then(function (response) {
            if (response.data.result == "true") {

              setSpecial(response.data.Data)
              console.log(11)
              console.log(response.data.Data)

          }
          else{
            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });


      }

      useEffect(() => {
        mainSlider();
    // alert(val)
      }, []);
  return (
    <div className="MainPageSpecialOffer">
        <div className="row margin25">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle">
                            پیشنهادهای ویژه
                        </p>
                    </div>
                    <div className="seeAllDiv">
                        <Button className="seeAll">مشاهده همه</Button>
                    </div>
                   </Col>
               </div>
        <div className="row">
        <Col md={2} className="pdTop15">
            <ul className="specialOfferUl">
            <li onClick={()=>mainProduct(1)}>
                    {/* <a href="#"> */}
                        کامپیوتر
                    {/* </a> */}
                </li>
                <li onClick={()=>mainProduct(2)}>
                        لپ تاپ
                </li>
                <li onClick={()=>mainProduct(3)}>
                        تبلت
                </li>

                <li onClick={()=>mainProduct(4)}>
                       موبایل و گجت
                </li>
                <li onClick={()=>mainProduct(5)}>
                        شبکه و سرور
                </li>
                <li onClick={()=>mainProduct(6)}>
                       کالای اداری
                </li>
                <li>
                        تصویربرداری
                </li>
                <li onClick={()=>mainProduct(7)}>
                        کنسول بازی
                </li>
            </ul>
            </Col>
            <Col md={8}>

                <SpecialOfferSlider data={special}/>
            </Col>
            <Col md={2} className="pdTop15">
                <div className="redBanner">
                    <img src={apiAsset+data?.LeftSlider1}/>
                    <p>ایسوس</p>
                </div>
                <div className="blackBanner">
                    <img src={apiAsset+data?.LeftSlider2}/>
                    <p>سامسونگ</p>
                </div>
                </Col>
        </div>
    </div>
  );
};

export default SpecialOffer;