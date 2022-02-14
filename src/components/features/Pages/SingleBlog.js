
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import RedBox from "./layouts/RedBox";

import { Container ,Col, Button,Row} from "react-bootstrap";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";

import Blog4 from "../../assets/img/Blog4.png";
import SuggestionBlogs from "./BlogComponents/SuggestionBlogs";
import BlogHeader from "./layouts/BlogHeader";
import {FaCaretLeft} from 'react-icons/fa';
import Category from "./BlogComponents/Category";
import BlogBox from "./BlogComponents/BlogBox";
import RelatedPost from "./BlogComponents/RelatedPost";
import ShowBlog from "./BlogComponents/ShowBlog";
import ReadMore from "./BlogComponents/ReadMore";
import CommentBox from "./SingleProductComponents/CommentBox";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

const SingleBlog = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
const [cat,setCat]=useState(params);
const [com,setCom]=useState([]);
console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "SingleBlog",{
            BlogID:cat
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios
          .post(apiUrl + "SingleBlogComment",{
            BlogID:cat
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setCom(response.data.Data)
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
  }, [cat]);
  return (
    <div className="SingleProduct">
        <Header/>
      <BlogHeader/>



      <Container className="EachCategoryContainer" fluid>
      <div className="breadCrumbs mt-2">
          <ul>
            <li>
              <a>
              <FaCaretLeft/>
                سایت راگ استریکس
              </a>
            </li>
            /
            <li>
              <a>
                سی پی یو
              </a>
            </li>
            /
            <li>
              <a>
              AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor
              </a>
            </li>
          </ul>
        </div>
       <div className="row mt-2 mb-5">
       <Col md={3}>
         <SuggestionBlogs/>
         <RelatedPost/>
         <Category/>
         </Col>
         <Col md={9}>
          <img className="BlogMainImg" src={Blog2}/>
        <ShowBlog/>
        <ReadMore/>
        <div className="whiteBox3 mt-3">
         <CommentBox data={com}/>
            </div>
         </Col>

       </div>

      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default SingleBlog;
