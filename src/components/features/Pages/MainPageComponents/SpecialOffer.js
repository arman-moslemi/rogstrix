import React,{useState,useEffect} from "react";
import redBanner from "../../../assets/img/redBanner.png";
import blackBanner from "../../../assets/img/blackBanner.png";
import "./Styles/specialOffer.css";
import SpecialOfferSlider from "./SpecialOfferSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// if you want to use array


const SpecialOffer = ({data}) => {
    const [special,setSpecial]=useState([])
    const history = useHistory();
    const {t,i18n} = useTranslation();

    const mainProduct=(ss)=>{
        const axios = require("axios");


          axios.post(apiUrl + "SpecialMainProduct",{MainGroupID:ss})
          .then(function (response) {
            if (response.data.result == "true") {

              setSpecial(response.data.Data)
              console.log(999)
              console.log(response.data.Data)

          }
          else{
            console.log(999)

            console.log(response.data.result)

          }})
          .catch(function (error) {
            console.log(error);
          });


      }
      const mainSlider=async()=>{
        const axios = require("axios");


          axios.post(apiUrl + "LastSpecialMainProduct",{MainGroupID:1})
          .then(function (response) {
            console.log(159876)

            console.log(response)

            if (response.data.result == "true") {

              setSpecial(response.data.Data)
              console.log(response.data.Data)

          }
          else{
            console.log(789456)

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
                   <Col md={12} className="resTaCenter">
                   <div className="">
                        <p className="specialOfferTitle">
                        {t("پیشنهادهای ویژه")}
                        </p>
                    </div>
                    <div className="seeAllDiv">
                        <Button onClick={()=>history.push("/ProductsSpecial")} className="seeAll">{t("مشاهده همه")}</Button>
                    </div>
                   </Col>
               </div>
        <div className="row">
        <Col md={2} className="pdTop15 colSpecial1">
            <ul className="specialOfferUl">
            <li onClick={()=>mainProduct(1)}>
                    {/* <a href="#"> */}
                    {t("قطعات کامپیوتر")}  
                                        {/* </a> */}
                </li>
                <li onClick={()=>mainProduct(2)}>
                {t("لپتاپ")} 
                </li>
                <li onClick={()=>mainProduct(3)}>
                {t("تبلت")}
                </li>

                <li onClick={()=>mainProduct(4)}>
                {t("موبایل و گجت")}   
                </li>
                <li onClick={()=>mainProduct(5)}>
                {t("شبکه و سرور")}
                </li>
                <li onClick={()=>mainProduct(6)}>
                {t("کالای اداری")}   
                </li>
                <li>
                {t("تصویربرداری")}    
                </li>
                <li onClick={()=>mainProduct(7)}>
                {t("کنسول بازی")}    
                </li>
            </ul>
            </Col>
            <Col md={8} className="colSpecial2">

                <SpecialOfferSlider data={special}/>
            </Col>
            <Col md={2}  className="colSpecial3">
                <div className="redBanner">
                    <img style={{borderRadius:20}} src={apiAsset+data?.LeftSlider1}/>
                    {/* <p>ایسوس</p> */}
                </div>
                <div className="blackBanner">
                    <img style={{borderRadius:20}} src={apiAsset+data?.LeftSlider2}/>
                    {/* <p>سامسونگ</p> */}
                </div>
                </Col>
        </div>
    </div>
  );
};

export default SpecialOffer;