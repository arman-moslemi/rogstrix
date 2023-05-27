
import FooterMain from './layouts/FooterMain';
import Header from "./layouts/Header";
import React,{useState,useEffect} from 'react'

import RedBox from "./layouts/RedBox";

import { Container ,Col, Button,Row} from "react-bootstrap";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";
import Blog4 from "../../assets/img/Blog4.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import BlogHeader from "./layouts/BlogHeader";
import {FaCaretLeft} from 'react-icons/fa';
import Category from "./BlogComponents/Category";
import BlogBox from "./BlogComponents/BlogBox";
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from "react-router-dom";

const BlogMain = () => {
  const [blog,setBlog]=useState([])
  const [slider,setSlider]=useState([])
  const [type,setType]=useState([])
  const [cat,setCat]=useState(0)
  const [language,setLanguage]=useState();
  const {t,i18n} = useTranslation();

  const mainSlider=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)
    axios.get(apiUrl + "BlogPic",{ headers: {
      lang: i18n.language
    }})
    .then(function (response) {
      if (response.data.result == "true") {

        setSlider(response.data.Data)
        console.log(11)
        console.log(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    
    if(cat!=0)
    {axios.post(apiUrl + "SingleBlogRelated",{BlogTypeID:cat},{ headers: {
      lang: i18n.language
    }})
    .then(function (response) {
      if (response.data.result == "true") {

        setBlog(response.data.Data)
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
else{
  axios.get(apiUrl + "AllBlog",{ headers: {
    lang: i18n.language
  }})
    .then(function (response) {
      if (response.data.result == "true") {

        setBlog(response.data.Data)
        console.log(11)
        console.log(response.data.Data)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
    axios.get(apiUrl + "BlogType")
    .then(function (response) {
      if (response.data.result == "true") {

        setType(response.data.Data)
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



  }
  const RelType=()=>{
    const axios = require("axios");

if(cat!=0)
    {axios.post(apiUrl + "SingleBlogRelated",{BlogTypeID:cat})
    .then(function (response) {
      if (response.data.result == "true") {

        setBlog(response.data.Data)
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


  }

  useEffect(() => {
    mainSlider();

// alert(val)
  }, [cat,language]);
  return (
    <div className="SingleProduct">
      <Header setLanguage={setLanguage}/>
      <BlogHeader data={type} cat={setCat}/>



      <Container className="EachCategoryContainer" fluid>
       <div className="row mt-5 mb-5">
         <Col md={8}>
          <Link to={slider.BlogLink1} style={{position:'relative'}}>
          <img className="BlogMainImg" src={apiAsset+slider[0]?.BlogPic1} />
          <div className="redDiv" style={{position:'absolute'}}>
            <p>{slider.BlogText1}</p>
          </div>
          </Link>
         </Col>
         <Col md={4}>
         <Link to={slider.BlogLink1} style={{position:'relative'}}>
         <img className="BlogSecondImg" src={apiAsset+slider[0]?.BlogPic2}/>
          <div className="redDiv" style={{position:'absolute'}}>
          <p>{slider.BlogText2}</p>
          </div>
         </Link>
         <Link to={slider.BlogLink1} style={{position:'relative'}}>
          <img className="BlogSecondImg margintop20" src={apiAsset+slider[0]?.BlogPic3}/>
          <div className="redDiv" style={{position:'absolute'}}>
          <p>{slider.BlogText3}</p>
          </div>
          </Link>
         </Col>
       </div>
       <div className="row">
         {/* <Col md={12} className="BCategoryDesNone">
           <Category data={type} cat={setCat}/>
         </Col> */}
         <Col md={3} className="BCategoryResNone">
           <Category data={type} cat={setCat}/>
         </Col>
         <Col md={9} className="resWidth100">
           {
             blog?.map((item)=>{
               return(

                 <BlogBox data={item}/>
               )
             })
           }

         </Col>
       </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default BlogMain;
