
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
const SingleBlog = () => {

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
         <CommentBox/>
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
