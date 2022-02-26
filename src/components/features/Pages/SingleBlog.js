
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
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
const SingleBlog = () => {
  const [data,setData]=useState([])
  const params = useParams().id;
  const history = useHistory();
const [cat,setCat]=useState();
const [com,setCom]=useState([]);
const [type,setType]=useState([])
const [special,setSpecial]=useState([])
const { isLoggedIn, token } = useContext(AuthContext);

console.log(params)
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "SingleBlog",{
            BlogID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data[0])
          console.log(888)
          console.log(params)
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
            BlogID:params
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

      axios.post(apiUrl + "LastMainProduct ",{MainGroupID:1})
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
    <div className="SingleProduct">
        <Header/>
      <BlogHeader/>



      <Container className="EachCategoryContainer" fluid>
      <div className="breadCrumbs mt-2">
          <ul>
            <li>
              <a>
              <FaCaretLeft/>
                سایت راگ استریکس/
              </a>

              <a>
{data.Title}              </a>
            </li>
          </ul>
        </div>
       <div className="row mt-2 mb-5">
       <Col md={3}>
         <SuggestionBlogs data={special}/>
         <RelatedPost BlogTypeID={data.BlogTypeID}/>
         <Category data={type}/>
         </Col>
         <Col md={9}>
          <img className="BlogMainImg" src={data.Pic}/>
        <ShowBlog data={data}/>
        {/* <ReadMore/> */}
        <div className="whiteBox3 mt-3">
         <CommentBox data={com} id={params} token={token}/>
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
