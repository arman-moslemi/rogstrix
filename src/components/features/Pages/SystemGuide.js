import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft  } from 'react-icons/fa';

import PageTitle from "../../assets/img/pageTitle.png"

import CompletedCards from "./CompletedSystemsComponents/CompletedCards";
const SystemGuide = () => {

  return (
    <div className="EachCategoryBody">
      <Header />
    

   
      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
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
        <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                راهنمای ساخت سیستم             </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="row " style={{marginBottom:25}}>
         
          <Col md={12}>
          
          <div className="productsWhiteBox radius10">
          <div className="whiteBoxHeader">
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
            <div>
              <p className="blackHeader">
                <FaAngleDoubleRight className="mr-4"/>
                سیستم های گیمینگ
                <FaAngleDoubleLeft className="ml-4"/>
                </p>
            </div>
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
           </div>
           <div className="row mt-20">
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
           </div>
           <div className="whiteBoxHeader">
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
            <div>
              <p className="blackHeader">
                <FaAngleDoubleRight className="mr-4"/>
                سیستم های اداری
                <FaAngleDoubleLeft className="ml-4"/>
                </p>
            </div>
            <div className="dashedBlackHr" style={{border:'none'}}>
              <hr/>
            </div>
           </div>
           <div className="row mt-20">
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
             <Col md={3}>
               <CompletedCards/>
             </Col>
           </div>
          </div>
        
          </Col>
          
         
        </div>
   
      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default SystemGuide;
