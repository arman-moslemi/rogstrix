
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import RedBox from "./layouts/RedBox";

import { Container ,Col, Button,Row} from "react-bootstrap";
import Blog2 from "../../assets/img/Blog2.png";
import Blog3 from "../../assets/img/Blog3.png";

import Blog4 from "../../assets/img/Blog4.png";

import BlogHeader from "./layouts/BlogHeader";
import {FaCaretLeft} from 'react-icons/fa';
import Category from "./BlogComponents/Category";
import BlogBox from "./BlogComponents/BlogBox";
const BlogMain = () => {

  return (
    <div className="SingleProduct">
        <Header/> 
      <BlogHeader/>
    

   
      <Container className="EachCategoryContainer" fluid>
       <div className="row mt-5 mb-5">
         <Col md={8}>
          <img className="BlogMainImg" src={Blog2}/>
         </Col>
         <Col md={4}>
          <img className="BlogSecondImg" src={Blog3}/>
          <img className="BlogSecondImg margintop20" src={Blog4}/>
         </Col>
       </div>
       <div className="row">
         <Col md={3}>
          <Category/>
         </Col>
         <Col md={9}>
        <BlogBox/>
        <BlogBox/>
        <BlogBox/>
         </Col>
       </div>
   
      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default BlogMain;
