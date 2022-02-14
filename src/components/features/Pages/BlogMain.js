
import Footer from "./layouts/Footer";
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

const BlogMain = () => {
  const [blog,setBlog]=useState([])
  const [type,setType]=useState([])
  const [cat,setCat]=useState([])

  const mainSlider=()=>{
    const axios = require("axios");


    axios.get(apiUrl + "AllBlog")
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

  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
    <div className="SingleProduct">
        <Header/>
      <BlogHeader/>



      <Container className="EachCategoryContainer" fluid>
       <div className="row mt-5 mb-5">
         <Col md={8}>
          <div style={{position:'relative'}}>
          <img className="BlogMainImg" src={Blog2}/>
          <div className="redDiv" style={{position:'absolute'}}>
            <p>بررسی گوشی گلکسی زد 4</p>
          </div>
          </div>
         </Col>
         <Col md={4}>
         <div style={{position:'relative'}}>
         <img className="BlogSecondImg" src={Blog3}/>
          <div className="redDiv" style={{position:'absolute'}}>
            <p>بررسی گوشی گلکسی زد 4</p>
          </div>
         </div>
          <div style={{position:'relative'}}>
          <img className="BlogSecondImg margintop20" src={Blog4}/>
          <div className="redDiv" style={{position:'absolute'}}>
            <p>بررسی گوشی گلکسی زد 4</p>
          </div>
          </div>
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
      <Footer />
    </div>
  );
};
export default BlogMain;
