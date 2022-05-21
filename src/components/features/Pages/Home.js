import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

import MainPageHeader from "./layouts/MainPageHeader";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import WhyRogstrix from "./HomePageComponents/WhyRogstrix";
import FirstSlider from "./HomePageComponents/FirstSlider";
import Statistic from "./HomePageComponents/Statistic";
import CategoryListRog from "./EachCategoryComponents/CategoryListRog";
import BestSellerSlider from "./HomePageComponents/BestSellerSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [slider,setSlider]=useState([])
  const [special,setSpecial]=useState([])
  const [cat,setCat]=useState()
  const [language,setLanguage]=useState();
  const {t,i18n} = useTranslation();

  const mainSlider=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)
      axios
          .get(apiUrl + "RogSlider",{ headers: {
            lang: i18n.language
          }})
      .then(function (response) {
        if (response.data.result == "true") {

          setSlider(response.data.Data[0])
          console.log(response.data.Data[0])

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios.post(apiUrl + "LastRogMainProduct ",{MainGroupID:1},{ headers: {
        lang: i18n.language
      }})
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
  const setcategory=(id)=>{
    const axios = require("axios");

    axios.post(apiUrl + "LastRogMainProduct ",{MainGroupID:id})
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
  }, [language]);
  return (
    <>
      {/* <MainPageHeader  /> */}
      <Header setLanguage={setLanguage}/>

    <FirstSlider data={slider}/>
    <div className="row mt-5">
      <Col md={2}>
      <CategoryListRog cat={setcategory} isRog={true}/>
      </Col>
      <Col md={10}>
      <div className="bestsliderBox bestSellerContainerCol2">
          <BestSellerSlider data={special}/>
        </div>
      </Col>
    </div>
     <Statistic/>
      <WhyRogstrix/>
      <Container className="bestSellerContainer" fluid>
        <div className="row">
        <Col md={1} className="rightBoxCol">
          <div>
            <p>
            محصولات پرفروش راگ
            </p>
          </div>
        </Col>
        <Col md={11} className="">
        <div className="bestsliderBox bestSellerContainerCol2">
          <BestSellerSlider data={special}/>
        </div>
        </Col>
        </div>
      </Container>
      <FooterMain />
    </>
  );
};
export default Home;
