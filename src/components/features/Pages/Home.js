import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

import MainPageHeader from "./layouts/MainPageHeader";
import FooterMain from "./layouts/FooterMain";
import WhyRogstrix from "./HomePageComponents/WhyRogstrix";
import FirstSlider from "./HomePageComponents/FirstSlider";
import Statistic from "./HomePageComponents/Statistic";
import CategoryList from "./EachCategoryComponents/CategoryList";
import BestSellerSlider from "./HomePageComponents/BestSellerSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
const Home = () => {
  const [slider,setSlider]=useState([])
  const [special,setSpecial]=useState([])
  const [cat,setCat]=useState()

  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .get(apiUrl + "RogSlider")
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
      axios.post(apiUrl + "LastRogMainProduct ",{MainGroupID:1})
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
  }, []);
  return (
    <>
      <MainPageHeader  />

    <FirstSlider data={slider}/>
    <div className="row mt-5">
      <Col md={2}>
      <CategoryList cat={setcategory}/>
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
