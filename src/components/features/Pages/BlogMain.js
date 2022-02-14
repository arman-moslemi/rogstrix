
import FooterMain from './layouts/FooterMain';
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
         <Col md={12} className="BCategoryDesNone">
           <Category/>
         </Col>
         <Col md={3} className="BCategoryResNone">
          <Category/>
         </Col>
         <Col md={9} className="resWidth100">
        <BlogBox/>
        <BlogBox/>
        <BlogBox/>
         </Col>
       </div>
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default BlogMain;
