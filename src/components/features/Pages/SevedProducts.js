import {React,useState} from "react";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelSeen from "../../assets/icons/panelSeen";
import Checkbox from '@mui/material/Checkbox';
import SevedProductsCard from "./UserPanelComponents/SevedProductsCard";

const SevedProducts = () => {
  
  return (
    <div className="">
    <Header />
  <Menu/>

 
    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3}>
             <RightMenu/>
         </Col>
         <Col md={9}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center">
      <PanelSeen className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                  محصولات ذخیره شده
                </p>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                    <div className="row">
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true} />
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true} />
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                        <Col md={4} className="mb-4">
                            <SevedProductsCard viewOverlay={true}/>
                        </Col>
                    </div>
                     
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
export default SevedProducts;
