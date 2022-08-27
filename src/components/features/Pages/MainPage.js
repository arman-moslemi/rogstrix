import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import React,{useState,useEffect} from 'react'
import RedBox from "./layouts/RedBox";
import BlackBox from "./layouts/BlackBox";
import MainSlider from "./MainPageComponents/MainSlider";
import SpecialOffer from "./MainPageComponents/SpecialOffer";
import ExclusiveSlider from "./MainPageComponents/ExclusiveSlider";
import NewProductSliderCard from "./MainPageComponents/NewProductSliderCard";
import BestSellingSliderCard from "./MainPageComponents/BestSellingSliderCard";
import BestSellingSlider from "./MainPageComponents/BestSellingSlider";
import bannerAssemble from "../../assets/img/bannerAssemble.png";
import bannerCase from "../../assets/img/bannerCase.png";
import img7 from "../../assets/img/img7.png";
import { Container ,Col, Button,Row} from "react-bootstrap";

import WeblogSlider from "./MainPageComponents/WeblogSlider";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const [slider,setSlider]=useState([])
  const [blog,setBlog]=useState([])
  const [newPro,setNew]=useState([])
  const [rog,setRog]=useState([])
  const [seller,setSeller]=useState()
  const [special,setSpecial]=useState()
  const history = useHistory();
  const {t,i18n} = useTranslation();
  const [language,setLanguage]=useState();

  const mainSlider=async()=>{
    const axios = require("axios");
console.log(i18n.language)
      axios
          .get(apiUrl + "MainSlider",{ headers: {
            lang: i18n.language
          }})
      .then(function (response) {
        if (response.data.result == "true") {

          setSlider(response.data.Data[0])

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });

     
      axios.get(apiUrl + "BestSellersProduct")
      .then(function (response) {
        if (response.data.result == "true") {

          setSeller(response.data.Data)
          console.log(22)
          console.log(response.data.Data)

      }
      else{
        console.log(22)

        console.log(response)

      }})
      .catch(function (error) {
        console.log(error);
      });

      axios.get(apiUrl + "LastRogProduct")
      .then(function (response) {
        if (response.data.result == "true") {

          setRog(response.data.Data)
          console.log(11)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios.post(apiUrl + "LastMainProduct",{MainGroupID:1})
      .then(function (response) {
        if (response.data.result == "true") {

          setNew(response.data.Data)
          console.log(11)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios.get(apiUrl + "LastBlog")
      .then(function (response) {
        if (response.data.result == "true") {

          setBlog(response.data.Data)
          console.log(4879)
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
    <>


      <Header setLanguage={setLanguage}/>
      <Menu/>
      <Container className="MainPageContainer ta-center" fluid>
        <MainSlider data={slider}/>
        <SpecialOffer data={slider}/>
        <div className="bannerRow">
    <div className="row">
      <Col md={6}>
      <div  className="bannerBackground">
        <Link onClick={()=>history.push("/AssembleSecond")} className="row align-items-center">
          <Col md={2} className="bannerCol1">
            <img src={bannerAssemble} className="redbannerImg"/>
          </Col>
          <Col md={10} className="bannerCol2">
          <p className="bannerFirstLine">
          {t("ساخت و اسمبل کردن سیستم")}
          </p>
          <p className="bannerSecondLine">
          {t("انتخاب، مقایسه و اسمبل سریع از بین قطعات برندهای مختلف")}
          </p>
          </Col>

        </Link>
      </div>
      </Col>
      <Col md={6}>
      <div  className="bannerBackground">
        <Link onClick={()=>history.push("/CompletedSystems")}className="row align-items-center">
          <Col md={2} className="bannerCol1">
            <img src={bannerCase} className="redbannerImg"/>
          </Col>
          <Col md={10} className="bannerCol2">
          <p className="bannerFirstLine">
          {t("سیستم های آماده")}
          </p>
          <p className="bannerSecondLine">
          {t("خرید از بین سیستم های آماده و بسته شده توسط کاربران")}
          </p>
          </Col>

        </Link>
      </div>
      </Col>
    </div>
        </div>
        <BlackBox data={slider}/>
       {/* <ExclusiveSlider data={slider}/> */}
       <div className="bestSellingDiv">
       <div className="row margin25 backWhite">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                        {t("محصولات فروشگاه راگ")}
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button onClick={()=>history.push("/home")} className="seeAll">{t("مشاهده همه")}</Button>
                    </div>
                   </Col>
               </div>
     <div className="d-flex justify-content-center margin mn">
     {/* {
         rog?.map((item)=>{
           return(

     <div>
           <BestSellingSliderCard viewList={true} data={item}/>
         </div>
           )
         })
       } */}
       <div>
         <ExclusiveSlider/>
       </div>
        
     </div>
       </div>
       <div>
         <div className="row customRow">
           <Col md={4}>
              <div className="productBannerBox" id="backBlack">
              <img src={apiAsset+slider?.DownSlider1}/>
                <div className="">

                  {/* <a href={slider.LinkDownSlider1} className="productLink">
                    مشاهده محصول
                  </a> */}
                </div>

              </div>
           </Col>
           <Col md={4}>
           <div className="productBannerBox" id="backGray">
           <img src={apiAsset+slider?.DownSlider2}/>

                {/* <div className="">

                  <a href={slider.LinkDownSlider2} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}


              </div>
           </Col>
           <Col md={4}>
           <div className="productBannerBox" id="backBlack">
           <img src={apiAsset+slider?.DownSlider3}/>
                {/* <div className="">

                  <a href={slider.LinkDownSlider3} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </div>
           </Col>
         </div>
       </div>

       <div className="bestSellingDiv">
       <div className="row margin25 backWhite">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                        {t("محصولات پر فروش")}
                        </p>
                    </div>
                    {/* <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button className="seeAll">مشاهده همه</Button>
                    </div> */}
                   </Col>
               </div>
     <div className="d-flex justify-content-center margin">
     

     <div className="tt2">
           <BestSellingSlider  data={seller}/>
         </div>
         
        
     </div>
       </div>
       <div>
         <div className="row customRow">
           <Col md={4}>
              <Link to={slider.LinkDownSlider4} href={slider.LinkDownSlider4}className="productBannerBox" id="backBlack">
              <img src={apiAsset+slider?.DownSlider4}/>
                {/* <div className="">

                  <a href={slider.LinkDownSlider4} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}



              </Link>
           </Col>
           <Col md={4}>
           <Link to={slider.LinkDownSlider5} className="productBannerBox" id="backGray">
           <img src={apiAsset+slider?.DownSlider5}/>
                {/* <div className="">

                  <a href={slider.LinkDownSlider5} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </Link>
           </Col>
           <Col md={4}>
           <Link href={slider.LinkDownSlider6} className="productBannerBox" id="backBlack">
           <img src={apiAsset+slider?.DownSlider6}/>
                {/* <div className="">

                  <a href={slider.LinkDownSlider6} className="productLink">
                    مشاهده محصول
                  </a>
                </div> */}

              </Link>
           </Col>
         </div>
       </div>
      <div className="newProductBox">
      <div className="row margin25">
                   <Col md={12} className="resTaCenter">
                   <div className="">
                        <p className="specialOfferTitle colorWhite">
                        {t("محصولات جدید")}
                        </p>
                    </div>
                    <div className="seeAllDiv" onClick={()=>history.push("/EachCategory/1")} style={{paddingLeft:50}}>
                        <Button className="seeAll"> {t("مشاهده همه")}</Button>
                    </div>
                   </Col>
               </div>
      <div className="row">
        {
          newPro.map((item,index2)=>{
            return(
index2<4?
        <Col md={6} className="marginTop30 newProductCol">
        <div className=" whiteBoxSlider">
          <NewProductSliderCard data={item}/>
          </div>
        </Col>
        :
        null
            )
          })
        }

        </div>

      </div>
      <div className="newsDiv">
       <div className="row margin25 backWhite">
                   <Col md={12} className="resTaCenter">
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                        {t("وبلاگ و خبرنامه")}
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button onClick={()=>history.push('/BlogMain')} className="seeAll"> {t("مشاهده همه")}</Button>
                    </div>
                   </Col>
               </div>
               <div className="tt3">
                 <WeblogSlider data={blog}/>
               </div>

       </div>
      </Container>

      <RedBox/>
      <FooterMain />
    </>
  );
};
export default MainPage;
